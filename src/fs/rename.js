import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const dir = path.join(__dirname, 'files');
    const oldPath = path.join(dir, 'wrongFilename.txt');
    const newPath = path.join(dir, 'properFilename.md');

    try {
        await fs.access(oldPath);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await fs.rename(oldPath, newPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

try {
    await rename();
} catch (err) {
    console.error(err.message);
}

