import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const dir = path.join(process.cwd(), 'files');
    const oldPath = path.join(dir, 'wrongFilename.txt');
    const newPath = path.join(dir, 'properFilename.md');

    try {
        await fs.access(oldPath);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(newPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') throw new Error('FS operation failed');
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

