import fs from 'node:fs';
import path from 'node:path';
import * as clipboard from 'tinyclip';
import { cursorSchema } from './schemas/cursor.get';

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
    console.log('Usage: tsx src/schema-builder.ts [options]');
    console.log('');
    console.log('Options:');
    console.log('  -h, --help           Show this help message');
    console.log('  -o, --output <file>  Save schema to file');
    console.log('  -c, --copy           Copy schema to clipboard');
    console.log('  -m, --minify         Minify JSON output (no pretty-printing)');
    console.log('');
    console.log('Examples:');
    console.log('  tsx src/schema-builder.ts                 # Print to terminal');
    console.log('  tsx src/schema-builder.ts --copy          # Copy to clipboard');
    console.log('  tsx src/schema-builder.ts -o schema.json  # Save to file');
    console.log('  tsx src/schema-builder.ts --minify --copy # Copy minified');
}

/**
 * Build the schema inside this constant.
 */
const schema = cursorSchema;

async function copyToClipboard(text: string): Promise<void> {
    try {
        await clipboard.writeText(text);
    } catch (error) {
        throw new Error(`Failed to copy to clipboard: ${error instanceof Error ? error.message : String(error)}`);
    }
}

async function main() {
    const args = process.argv.slice(2);

    // Parse flags
    let shouldCopy = false;
    let outputFile: string | null = null;
    let minify = false;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '-h' || arg === '--help') {
            printUsage();
            process.exit(0);
        } else if (arg === '-c' || arg === '--copy') {
            shouldCopy = true;
        } else if (arg === '-m' || arg === '--minify') {
            minify = true;
        } else if (arg === '-o' || arg === '--output') {
            if (i + 1 >= args.length) {
                console.error(`${colors.red}Error: --output requires a file path${colors.reset}`);
                printUsage();
                process.exit(1);
            }
            outputFile = path.resolve(args[++i]);
        } else {
            console.error(`${colors.red}Error: Unknown option: ${arg}${colors.reset}`);
            printUsage();
            process.exit(1);
        }
    }

    try {
        console.log(`${colors.cyan}Building schema...${colors.reset}`);

        // Convert schema to JSON Schema
        const jsonSchema = schema.toJSONSchema();

        // Remove unnecessary safe integer bounds
        function removeSafeIntegerBounds(obj: any): any {
            if (obj && typeof obj === 'object') {
                if (Array.isArray(obj)) {
                    return obj.map(removeSafeIntegerBounds);
                }
                
                const newObj: any = {};
                for (const [key, value] of Object.entries(obj)) {
                    // Skip min/max if they're the safe integer bounds
                    if (key === 'minimum' && value === -9007199254740991) continue;
                    if (key === 'maximum' && value === 9007199254740991) continue;
                    
                    newObj[key] = removeSafeIntegerBounds(value);
                }
                return newObj;
            }
            return obj;
        }

        const cleanedSchema = removeSafeIntegerBounds(jsonSchema);

        // Format output
        const output = minify
            ? JSON.stringify(cleanedSchema)
            : JSON.stringify(cleanedSchema, null, 2);

        // Handle output
        if (outputFile) {
            fs.writeFileSync(outputFile, output, 'utf-8');
            console.log(`${colors.green}✓ Schema saved to file${colors.reset}`);
            console.log(`${colors.gray}Output: ${path.relative(process.cwd(), outputFile)}${colors.reset}`);
        }

        if (shouldCopy) {
            await copyToClipboard(output);
            console.log(`${colors.green}✓ Schema copied to clipboard${colors.reset}`);
        }

        if (!outputFile && !shouldCopy) {
            // Default: print to terminal
            console.log(`${colors.green}✓ Schema generated${colors.reset}`);
            console.log('');
            console.log(output);
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

