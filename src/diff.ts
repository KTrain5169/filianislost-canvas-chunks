import { diffLines } from 'diff';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, basename } from 'path';

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
    console.log('Usage: tsx src/diff.ts <file1> <file2> [options]');
    console.log('');
    console.log('Options:');
    console.log('  -o, --output <file>  Save diff as a patch file');
    console.log('  --full               Show full diff with all context lines');
    console.log('');
    console.log('Examples:');
    console.log('  tsx src/diff.ts file1.js file2.js');
    console.log('  tsx src/diff.ts file1.js file2.js --full');
    console.log('  tsx src/diff.ts file1.js file2.js -o changes.patch');
}

function main() {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.error(`${colors.red}Error: Expected at least 2 file arguments${colors.reset}`);
        printUsage();
        process.exit(1);
    }

    // Parse arguments
    let outputFile: string | null = null;
    let showFullContext = false;
    let file1Path: string;
    let file2Path: string;

    const outputFlagIndex = args.findIndex(arg => arg === '-o' || arg === '--output');
    const fullFlagIndex = args.findIndex(arg => arg === '--full');

    // Remove flags from args to get file paths
    let fileArgs = [...args];

    if (outputFlagIndex !== -1) {
        if (outputFlagIndex + 1 >= args.length) {
            console.error(`${colors.red}Error: --output flag requires a filename${colors.reset}`);
            printUsage();
            process.exit(1);
        }
        outputFile = args[outputFlagIndex + 1];
        fileArgs = fileArgs.filter((_, i) => i !== outputFlagIndex && i !== outputFlagIndex + 1);
    }

    if (fullFlagIndex !== -1) {
        showFullContext = true;
        fileArgs = fileArgs.filter(arg => arg !== '--full');
    }

    if (fileArgs.length !== 2) {
        console.error(`${colors.red}Error: Expected 2 file arguments, got ${fileArgs.length}${colors.reset}`);
        printUsage();
        process.exit(1);
    }

    [file1Path, file2Path] = fileArgs.map(p => resolve(p));

    try {
        // Read both files
        const file1Content = readFileSync(file1Path, 'utf-8');
        const file2Content = readFileSync(file2Path, 'utf-8');

        // Generate diff
        const diff = diffLines(file1Content, file2Content);

        // Track stats and build patch content
        let additions = 0;
        let deletions = 0;
        let unchanged = 0;
        const patchLines: string[] = [];

        // Build patch header
        patchLines.push(`--- ${file1Path}`);
        patchLines.push(`+++ ${file2Path}`);
        patchLines.push('');

        // Process diff based on --full flag
        if (showFullContext) {
            // Full mode: include all lines
            diff.forEach(part => {
                const lines = part.value.split('\n').filter(line => line);

                if (part.added) {
                    additions += lines.length;
                    lines.forEach(line => {
                        patchLines.push(`+ ${line}`);
                    });
                } else if (part.removed) {
                    deletions += lines.length;
                    lines.forEach(line => {
                        patchLines.push(`- ${line}`);
                    });
                } else {
                    unchanged += lines.length;
                    lines.forEach(line => {
                        patchLines.push(`  ${line}`);
                    });
                }
            });
        } else {
            // Minimal mode: only changed lines with context
            const contextLines = 3;

            for (let i = 0; i < diff.length; i++) {
                const part = diff[i];
                const lines = part.value.split('\n').filter(line => line);

                if (part.added) {
                    additions += lines.length;
                    lines.forEach(line => {
                        patchLines.push(`+ ${line}`);
                    });
                } else if (part.removed) {
                    deletions += lines.length;
                    lines.forEach(line => {
                        patchLines.push(`- ${line}`);
                    });
                } else {
                    unchanged += lines.length;
                    // Show limited context around changes
                    const prevHasChanges = i > 0 && (diff[i - 1].added || diff[i - 1].removed);
                    const nextHasChanges = i < diff.length - 1 && (diff[i + 1].added || diff[i + 1].removed);

                    if (prevHasChanges || nextHasChanges) {
                        const start = prevHasChanges ? 0 : Math.max(0, lines.length - contextLines);
                        const end = nextHasChanges ? Math.min(lines.length, contextLines) : lines.length;

                        if (start > 0) {
                            patchLines.push('  ...');
                        }

                        for (let j = start; j < end; j++) {
                            patchLines.push(`  ${lines[j]}`);
                        }

                        if (end < lines.length && nextHasChanges) {
                            patchLines.push('  ...');
                        }
                    }
                }
            }
        }

        const hasChanges = additions > 0 || deletions > 0;

        // If output file specified, save patch and print summary
        if (outputFile) {
            const patchContent = patchLines.join('\n');
            writeFileSync(outputFile, patchContent, 'utf-8');

            console.log(`${colors.cyan}=== Diff Summary ===${colors.reset}`);
            console.log(`${colors.gray}From: ${basename(file1Path)}${colors.reset}`);
            console.log(`${colors.gray}To:   ${basename(file2Path)}${colors.reset}`);
            console.log('');
            console.log(`${colors.green}+${additions} additions${colors.reset}`);
            console.log(`${colors.red}-${deletions} deletions${colors.reset}`);
            console.log(`${colors.gray} ${unchanged} unchanged${colors.reset}`);
            console.log('');

            if (hasChanges) {
                const patchType = showFullContext ? 'Full patch' : 'Minimal patch';
                console.log(`${colors.yellow}✓ ${patchType} saved to: ${outputFile}${colors.reset}`);
                if (!showFullContext) {
                    console.log(`${colors.gray}  (Use --full to include all context lines)${colors.reset}`);
                }
            } else {
                console.log(`${colors.gray}(No changes detected)${colors.reset}`);
            }
        } else {
            // Print diff to terminal with colors
            console.log(`${colors.cyan}=== Diff: ${basename(file1Path)} -> ${basename(file2Path)} ===${colors.reset}\n`);

            if (showFullContext) {
                // Show all lines including context
                diff.forEach(part => {
                    const lines = part.value.split('\n');

                    if (part.added) {
                        lines.forEach(line => {
                            if (line) {
                                console.log(`${colors.green}+ ${line}${colors.reset}`);
                            }
                        });
                    } else if (part.removed) {
                        lines.forEach(line => {
                            if (line) {
                                console.log(`${colors.red}- ${line}${colors.reset}`);
                            }
                        });
                    } else {
                        lines.forEach(line => {
                            if (line) {
                                console.log(`${colors.gray}  ${line}${colors.reset}`);
                            }
                        });
                    }
                });
            } else {
                // Show only changed lines with minimal context (3 lines before/after)
                const contextLines = 3;

                for (let i = 0; i < diff.length; i++) {
                    const part = diff[i];
                    const lines = part.value.split('\n').filter(line => line);

                    if (part.added) {
                        lines.forEach(line => {
                            console.log(`${colors.green}+ ${line}${colors.reset}`);
                        });
                    } else if (part.removed) {
                        lines.forEach(line => {
                            console.log(`${colors.red}- ${line}${colors.reset}`);
                        });
                    } else {
                        // Show limited context around changes
                        const prevHasChanges = i > 0 && (diff[i - 1].added || diff[i - 1].removed);
                        const nextHasChanges = i < diff.length - 1 && (diff[i + 1].added || diff[i + 1].removed);

                        if (prevHasChanges || nextHasChanges) {
                            const start = prevHasChanges ? 0 : Math.max(0, lines.length - contextLines);
                            const end = nextHasChanges ? Math.min(lines.length, contextLines) : lines.length;

                            if (start > 0) {
                                console.log(`${colors.gray}  ...${colors.reset}`);
                            }

                            for (let j = start; j < end; j++) {
                                console.log(`${colors.gray}  ${lines[j]}${colors.reset}`);
                            }

                            if (end < lines.length && nextHasChanges) {
                                console.log(`${colors.gray}  ...${colors.reset}`);
                            }
                        }
                    }
                }
            }

            // Print summary
            console.log(`\n${colors.cyan}=== Summary ===${colors.reset}`);
            console.log(`${colors.green}+${additions} additions${colors.reset}`);
            console.log(`${colors.red}-${deletions} deletions${colors.reset}`);
            console.log(`${colors.gray} ${unchanged} unchanged${colors.reset}`);

            if (!showFullContext && unchanged > 0) {
                console.log(`${colors.gray}\n(Use --full to see all context lines)${colors.reset}`);
            }
        }

    } catch (error) {
        if (error instanceof Error) {
            console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
        }
        process.exit(1);
    }
}

main();
