import { fetchAndSaveChunks } from './modules/chunk-utils.js';

// CLI usage
const url = process.argv[2] || 'https://filianislost.com';
const filenameTemplate = process.argv[3] || './playground/{originalName}.js';

console.log('=== Chunk Fetcher ===');
console.log(`URL: ${url}`);
console.log(`Filename template: ${filenameTemplate}`);
console.log();

fetchAndSaveChunks(url, filenameTemplate)
    .then(() => {
        console.log('\n✓ Done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n✗ Failed:', error.message);
        process.exit(1);
    });

