import { parseSync } from "oxc-parser";
import { print } from "esrap";
import ts from 'esrap/languages/ts';
import fs from 'node:fs';
import path from 'node:path';

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m',
    yellow: '\x1b[33m',
};

function printUsage() {
    console.log('Usage: tsx src/parse.ts <input-file> [output-file]');
    console.log('');
    console.log('Arguments:');
    console.log('  input-file   JavaScript/TypeScript file to parse and prettify');
    console.log('  output-file  Optional output file (default: <input>-prettified.<ext>)');
    console.log('');
    console.log('Examples:');
    console.log('  tsx src/parse.ts minified.js');
    console.log('  tsx src/parse.ts minified.js output.js');
    console.log('  tsx src/parse.ts playground/file.js');
}

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
        printUsage();
        process.exit(args.length === 0 ? 1 : 0);
    }

    if (args.length > 2) {
        console.error(`${colors.red}Error: Too many arguments${colors.reset}`);
        printUsage();
        process.exit(1);
    }

    const inputFile = path.resolve(args[0]);

    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
        console.error(`${colors.red}Error: Input file not found: ${inputFile}${colors.reset}`);
        process.exit(1);
    }

    // Determine output file
    let outputFile: string;
    if (args.length === 2) {
        outputFile = path.resolve(args[1]);
    } else {
        const parsed = path.parse(inputFile);
        outputFile = path.join(parsed.dir, `${parsed.name}-prettified${parsed.ext}`);
    }

    try {
        console.log(`${colors.cyan}Parsing and prettifying...${colors.reset}`);
        console.log(`${colors.gray}Input:  ${path.relative(process.cwd(), inputFile)}${colors.reset}`);
        console.log(`${colors.gray}Output: ${path.relative(process.cwd(), outputFile)}${colors.reset}`);
        console.log('');

        // Read input file
        const inputContent = fs.readFileSync(inputFile, 'utf-8');
        const inputSize = Buffer.byteLength(inputContent);

        // Parse and prettify
        const { program } = parseSync(inputFile, inputContent);
        const { code } = print(program, ts());

        // Write output file
        fs.writeFileSync(outputFile, code, 'utf-8');
        const outputSize = Buffer.byteLength(code);

        // Success message with stats
        console.log(`${colors.green}✓ Successfully prettified!${colors.reset}`);
        console.log('');
        console.log(`${colors.gray}Input size:  ${formatBytes(inputSize)}${colors.reset}`);
        console.log(`${colors.gray}Output size: ${formatBytes(outputSize)}${colors.reset}`);

        const diff = outputSize - inputSize;
        const sign = diff > 0 ? '+' : '';
        const color = diff > 0 ? colors.red : colors.green;
        console.log(`${colors.gray}Difference:  ${color}${sign}${formatBytes(diff)}${colors.reset}`);

    } catch (error) {
        if (error instanceof Error) {
            console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
            if (error.stack) {
                console.error(`${colors.gray}${error.stack}${colors.reset}`);
            }
        }
        process.exit(1);
    }
}

function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

main();
