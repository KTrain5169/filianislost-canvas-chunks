import { decodeBase64ToBson } from './modules/bson.js';
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
    console.log('Usage: tsx src/bson-decode.ts <base64-string> [output-file]');
    console.log('   or: tsx src/bson-decode.ts --file <input-file> [output-file]');
    console.log('');
    console.log('Arguments:');
    console.log('  base64-string  Base64-encoded BSON data to decode');
    console.log('  --file         Read Base64 string from a file');
    console.log('  output-file    Optional JSON output file (default: print to stdout)');
    console.log('');
    console.log('Examples:');
    console.log('  tsx src/bson-decode.ts "SGVsbG8gV29ybGQ="');
    console.log('  tsx src/bson-decode.ts "SGVsbG8=" output.json');
    console.log('  tsx src/bson-decode.ts --file encoded.txt');
    console.log('  tsx src/bson-decode.ts --file encoded.txt decoded.json');
}

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
        printUsage();
        process.exit(args.length === 0 ? 1 : 0);
    }

    let base64String: string;
    let outputFile: string | null = null;

    try {
        // Parse arguments
        if (args[0] === '--file') {
            if (args.length < 2) {
                console.error(`${colors.red}Error: --file requires an input file path${colors.reset}`);
                printUsage();
                process.exit(1);
            }

            const inputFile = path.resolve(args[1]);

            if (!fs.existsSync(inputFile)) {
                console.error(`${colors.red}Error: Input file not found: ${inputFile}${colors.reset}`);
                process.exit(1);
            }

            console.log(`${colors.cyan}Reading from file...${colors.reset}`);
            console.log(`${colors.gray}Input: ${path.relative(process.cwd(), inputFile)}${colors.reset}`);

            base64String = fs.readFileSync(inputFile, 'utf-8').trim();

            if (args.length >= 3) {
                outputFile = path.resolve(args[2]);
            }
        } else {
            // First argument is the Base64 string
            base64String = args[0];

            if (args.length >= 2) {
                outputFile = path.resolve(args[1]);
            }
        }

        console.log(`${colors.cyan}Decoding BSON...${colors.reset}`);
        console.log(`${colors.gray}Base64 length: ${base64String.length} characters${colors.reset}`);
        console.log('');

        // Decode
        const decoded = decodeBase64ToBson(base64String);

        // Format as JSON
        const json = JSON.stringify(decoded, null, 2);

        // Output
        if (outputFile) {
            fs.writeFileSync(outputFile, json, 'utf-8');
            console.log(`${colors.green}✓ Successfully decoded!${colors.reset}`);
            console.log(`${colors.gray}Output: ${path.relative(process.cwd(), outputFile)}${colors.reset}`);
        } else {
            console.log(`${colors.green}✓ Successfully decoded!${colors.reset}`);
            console.log('');
            console.log(json);
        }

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

main();
