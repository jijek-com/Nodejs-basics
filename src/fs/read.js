import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

try {
    await read();
} catch (err) {
    console.error(err.message);
}
