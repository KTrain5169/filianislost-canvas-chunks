import { appendFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { decodeBson, encodeBson } from '../src/modules/bson.js';

const OUTPUT_FILE = join(process.cwd(), 'websocket-messages.log');
const OUTPUT_FILE_RAW = join(process.cwd(), 'websocket-messages-raw.log');
const WS_URL = 'wss://ws.filianislost.com/';

// Initialize the log files
writeFileSync(OUTPUT_FILE, `WebSocket Log (Decoded) - Started at ${new Date().toISOString()}\n${'='.repeat(80)}\n\n`);
writeFileSync(OUTPUT_FILE_RAW, `WebSocket Log (Raw) - Started at ${new Date().toISOString()}\n${'='.repeat(80)}\n\n`);
console.log(`Logging decoded messages to: ${OUTPUT_FILE}`);
console.log(`Logging raw messages to: ${OUTPUT_FILE_RAW}`);

const socket = new WebSocket(WS_URL);
let heartbeatInterval: NodeJS.Timeout | null = null;

/**
 * Send BSON-encoded data to the WebSocket server
 * @param data - JavaScript object to encode and send
 */
function sendBson(data: object): void {
    try {
        const buffer = encodeBson(data);
        // Convert Buffer to Uint8Array for WebSocket compatibility
        const uint8Array = new Uint8Array(buffer);
        socket.send(uint8Array);
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] Sent BSON message (${buffer.length} bytes)`);

        const logEntry = `[${timestamp}] Sent message:\n${JSON.stringify(data, null, 2)}\n${'-'.repeat(80)}\n`;
        appendFileSync(OUTPUT_FILE, logEntry);
    } catch (error) {
        console.error(`Failed to send BSON message: ${error instanceof Error ? error.message : String(error)}`);
    }
}

socket.onopen = () => {
    const msg = `[${new Date().toISOString()}] Connected to ${WS_URL}\n`;
    console.log(msg.trim());
    appendFileSync(OUTPUT_FILE, msg);

    sendBson({ op: 2, token: process.env.WS_TOKEN ?? '' });

    heartbeatInterval = setInterval(() => {
        sendBson({ op: 0, nonce: Date.now() });
    }, 15000);
};

socket.onmessage = async (event) => {
    const timestamp = new Date().toISOString();

    try {
        let buffer: Buffer;

        // Convert the message to a Buffer
        if (event.data instanceof ArrayBuffer) {
            buffer = Buffer.from(event.data);
        } else if (event.data instanceof Blob) {
            const arrayBuffer = await event.data.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
        } else if (typeof event.data === 'string') {
            // If it's a string, it might be base64-encoded BSON
            buffer = Buffer.from(event.data, 'base64');
        } else {
            buffer = Buffer.from(event.data);
        }

        // Log raw data
        const rawLogEntry = `[${timestamp}] Raw message (${buffer.length} bytes):\n${buffer.toString('base64')}\n${'-'.repeat(80)}\n`;
        appendFileSync(OUTPUT_FILE_RAW, rawLogEntry);

        // Decode BSON
        const decoded = decodeBson(buffer);
        const decodedJson = JSON.stringify(decoded, null, 2);

        const logEntry = `[${timestamp}] Decoded message:\n${decodedJson}\n${'-'.repeat(80)}\n`;

        console.log(`[${timestamp}] Received message (${buffer.length} bytes) - Decoded successfully`);
        appendFileSync(OUTPUT_FILE, logEntry);

    } catch (error) {
        const errorMsg = `[${timestamp}] Error decoding message: ${error instanceof Error ? error.message : String(error)}\n`;
        console.error(errorMsg.trim());
        appendFileSync(OUTPUT_FILE, errorMsg);

        // Still log the raw data if decoding fails
        if (typeof event.data === 'string') {
            appendFileSync(OUTPUT_FILE_RAW, `[${timestamp}] Raw (string): ${event.data}\n${'-'.repeat(80)}\n`);
        }
    }
};

socket.onerror = (error) => {
    const msg = `[${new Date().toISOString()}] Error: ${error}\n`;
    console.error(msg.trim());
    appendFileSync(OUTPUT_FILE, msg);
};

socket.onclose = (event) => {
    if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }
    const msg = `[${new Date().toISOString()}] Connection closed (code: ${event.code}, reason: ${event.reason})\n`;
    console.log(msg.trim());
    appendFileSync(OUTPUT_FILE, msg);
};

// Handle process termination
process.on('SIGINT', () => {
    console.log('\nClosing connection...');

    // Clear the interval immediately
    if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }

    // Close socket and force exit after a short timeout
    socket.close();

    // Force exit if socket doesn't close within 1 second
    setTimeout(() => {
        console.log('Force exiting...');
        process.exit(0);
    }, 1000);
});
