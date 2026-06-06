import { deserialize, serialize } from 'bson';

/**
 * Decode a Base64-encoded BSON string to a JavaScript object
 */
export function decodeBase64ToBson(base64String: string): any {
    try {
        // Decode Base64 to Buffer
        const buffer = Buffer.from(base64String, 'base64');

        // Deserialize BSON
        const decoded = deserialize(buffer);

        return decoded;
    } catch (error) {
        throw new Error(`Failed to decode BSON: ${error instanceof Error ? error.message : String(error)}`);
    }
}

/**
 * Decode a BSON Buffer to a JavaScript object
 */
export function decodeBson(buffer: Buffer): any {
    try {
        return deserialize(buffer);
    } catch (error) {
        throw new Error(`Failed to decode BSON: ${error instanceof Error ? error.message : String(error)}`);
    }
}

/**
 * Encode a JavaScript object to BSON and return as Base64 string
 */
export function encodeBsonToBase64(data: any): string {
    try {
        // Serialize to BSON
        const buffer = serialize(data);

        // Encode to Base64
        return buffer.toString('base64');
    } catch (error) {
        throw new Error(`Failed to encode BSON: ${error instanceof Error ? error.message : String(error)}`);
    }
}

/**
 * Encode a JavaScript object to BSON Buffer
 */
export function encodeBson(data: any): Buffer {
    try {
        return Buffer.from(serialize(data));
    } catch (error) {
        throw new Error(`Failed to encode BSON: ${error instanceof Error ? error.message : String(error)}`);
    }
}
