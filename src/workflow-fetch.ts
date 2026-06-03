import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { fetchAndParseScripts, downloadScript } from './modules/chunk-utils.js';

interface ChunkInfo {
    filename: string;
    hash: string;
    number: number;
}

/**
 * Get the next available number for chunks in the playground directory
 */
function getNextChunkNumber(playgroundDir: string): number {
    if (!fs.existsSync(playgroundDir)) {
        return 1;
    }

    const files = fs.readdirSync(playgroundDir);
    const numbers = files
        .filter(f => /^\d{2}-chunk-/.test(f))
        .map(f => parseInt(f.split('-')[0], 10))
        .filter(n => !isNaN(n));

    if (numbers.length === 0) {
        return 1;
    }

    return Math.max(...numbers) + 1;
}

/**
 * Extract chunk hash from filename (e.g., "chunk-abc123.js" -> "abc123")
 */
function extractChunkHash(filename: string): string | null {
    const match = filename.match(/chunk-([a-z0-9]+)\.js$/i);
    return match ? match[1] : null;
}

/**
 * Get existing chunk hashes from the playground directory
 */
function getExistingChunks(playgroundDir: string): Set<string> {
    if (!fs.existsSync(playgroundDir)) {
        return new Set();
    }

    const files = fs.readdirSync(playgroundDir);
    const hashes = new Set<string>();

    for (const file of files) {
        const hash = extractChunkHash(file);
        if (hash) {
            hashes.add(hash);
        }
    }

    return hashes;
}

/**
 * Prettify a JavaScript file using oxfmt
 */
function prettifyFile(inputPath: string, outputPath: string): void {
    console.log(`Prettifying ${inputPath}...`);

    try {
        // Read the file
        const content = fs.readFileSync(inputPath, 'utf-8');

        // Write to output path
        fs.writeFileSync(outputPath, content, 'utf-8');

        // Run oxfmt on the output file
        execSync(`pnpm exec oxfmt ${outputPath}`, { stdio: 'inherit' });

        console.log(`✓ Prettified to ${outputPath}`);
    } catch (error) {
        console.error(`Error prettifying ${inputPath}:`, error);
        throw error;
    }
}

/**
 * Main workflow function
 */
async function workflowFetch(): Promise<void> {
    const url = 'https://filianislost.com';
    const playgroundDir = './playground';
    const tempDir = './temp';

    console.log('=== Workflow Fetch ===');
    console.log(`URL: ${url}`);
    console.log(`Playground: ${playgroundDir}\n`);

    try {
        // Create temp directory
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        // Parse the page and get script sources
        const scripts = await fetchAndParseScripts(url);
        const moduleScripts = scripts.filter(s => s.type === 'module');

        if (moduleScripts.length === 0) {
            console.log('No module scripts found.');
            return;
        }

        console.log(`\nFound ${moduleScripts.length} module script(s)`);

        // Get existing chunks
        const existingChunks = getExistingChunks(playgroundDir);
        console.log(`Existing chunks: ${existingChunks.size}`);

        // Download to temp and check for new chunks
        const newChunks: ChunkInfo[] = [];

        for (const script of moduleScripts) {
            const scriptFilename = path.basename(new URL(script.src, url).pathname);
            const hash = extractChunkHash(scriptFilename);

            if (!hash) {
                console.log(`Skipping ${scriptFilename} (no hash found)`);
                continue;
            }

            if (existingChunks.has(hash)) {
                console.log(`Skipping ${scriptFilename} (already exists)`);
                continue;
            }

            // Download to temp
            const tempPath = path.join(tempDir, scriptFilename);
            await downloadScript(url, script.src, tempPath);

            newChunks.push({
                filename: scriptFilename,
                hash,
                number: 0, // Will be assigned below
            });
        }

        if (newChunks.length === 0) {
            console.log('\n✓ No new chunks found');

            // Clean up temp directory
            if (fs.existsSync(tempDir)) {
                fs.rmSync(tempDir, { recursive: true });
            }

            return;
        }

        console.log(`\n✓ Found ${newChunks.length} new chunk(s)`);

        // Assign numbers and copy to playground
        let nextNumber = getNextChunkNumber(playgroundDir);

        // Ensure playground directory exists
        if (!fs.existsSync(playgroundDir)) {
            fs.mkdirSync(playgroundDir, { recursive: true });
        }

        for (const chunk of newChunks) {
            chunk.number = nextNumber;
            const paddedNumber = nextNumber.toString().padStart(2, '0');

            // Original file
            const tempPath = path.join(tempDir, chunk.filename);
            const originalPath = path.join(playgroundDir, `${paddedNumber}-chunk-${chunk.hash}.js`);
            const prettifiedPath = path.join(playgroundDir, `${paddedNumber}-chunk-${chunk.hash}-prettified.js`);

            // Copy original
            fs.copyFileSync(tempPath, originalPath);
            console.log(`✓ Saved ${originalPath}`);

            // Create prettified version
            prettifyFile(originalPath, prettifiedPath);

            nextNumber++;
        }

        // Clean up temp directory
        if (fs.existsSync(tempDir)) {
            fs.rmSync(tempDir, { recursive: true });
        }

        console.log(`\n✓ Successfully processed ${newChunks.length} new chunk(s)`);

        // Output summary for GitHub Actions
        console.log('\n--- SUMMARY ---');
        console.log(`NEW_CHUNKS=${newChunks.length}`);
        console.log('CHUNKS:');
        for (const chunk of newChunks) {
            const paddedNumber = chunk.number.toString().padStart(2, '0');
            console.log(`  ${paddedNumber}-chunk-${chunk.hash}`);
        }

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Run the workflow
workflowFetch()
    .then(() => {
        console.log('\n✓ Workflow complete');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n✗ Workflow failed:', error.message);
        process.exit(1);
    });
