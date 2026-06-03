import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from 'jsdom';

export interface ScriptInfo {
    src: string;
    type?: string;
    crossorigin?: string;
}

/**
 * Fetches a URL and extracts all script sources from the HTML
 */
export async function fetchAndParseScripts(url: string): Promise<ScriptInfo[]> {
    console.log(`Fetching ${url}...`);
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Find all script tags with src attributes
    const scriptElements = Array.from(document.querySelectorAll('script[src]'));

    const scripts: ScriptInfo[] = scriptElements.map((script) => ({
        src: script.getAttribute('src')!,
        type: script.getAttribute('type') || undefined,
        crossorigin: script.getAttribute('crossorigin') || undefined,
    }));

    console.log(`Found ${scripts.length} script(s)`);
    scripts.forEach((script, i) => {
        console.log(`  ${i + 1}. ${script.src} ${script.type ? `(${script.type})` : ''}`);
    });

    return scripts;
}

/**
 * Downloads a script file and saves it using the filename template
 */
export async function downloadScript(
    baseUrl: string,
    scriptSrc: string,
    filenameTemplate: string
): Promise<string> {
    // Resolve the full URL
    const scriptUrl = new URL(scriptSrc, baseUrl).href;
    console.log(`\nDownloading ${scriptUrl}...`);

    const response = await fetch(scriptUrl);

    if (!response.ok) {
        throw new Error(`Failed to download ${scriptUrl}: ${response.status} ${response.statusText}`);
    }

    const content = await response.text();

    // Extract filename from the URL
    const originalFilename = path.basename(new URL(scriptUrl).pathname);
    const ext = path.extname(originalFilename);
    const nameWithoutExt = path.basename(originalFilename, ext);

    // Apply filename template
    let outputPath = filenameTemplate.replace('{originalName}', nameWithoutExt);

    // If template doesn't have an extension and original did, add it
    if (!path.extname(outputPath) && ext) {
        outputPath += ext;
    }

    // Ensure directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save to file
    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log(`Saved to ${outputPath} (${content.length} bytes)`);

    return outputPath;
}

/**
 * Main function to fetch page, parse scripts, and download them
 */
export async function fetchAndSaveChunks(
    pageUrl: string,
    filenameTemplate: string = './playground/{originalName}.js'
): Promise<void> {
    try {
        // Parse the page and extract script sources
        const scripts = await fetchAndParseScripts(pageUrl);

        // Filter for module scripts (the main bundles we care about)
        const moduleScripts = scripts.filter(s => s.type === 'module');

        if (moduleScripts.length === 0) {
            console.log('\nNo module scripts found. Downloading all scripts...');
        } else {
            console.log(`\nDownloading ${moduleScripts.length} module script(s)...`);
        }

        const scriptsToDownload = moduleScripts.length > 0 ? moduleScripts : scripts;

        // Download each script
        const downloadedFiles: string[] = [];
        for (const script of scriptsToDownload) {
            try {
                const filePath = await downloadScript(pageUrl, script.src, filenameTemplate);
                downloadedFiles.push(filePath);
            } catch (error) {
                console.error(`Error downloading ${script.src}:`, error);
            }
        }

        console.log(`\n✓ Successfully downloaded ${downloadedFiles.length} file(s)`);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
