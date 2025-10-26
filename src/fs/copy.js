import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
    const src = path.join(process.cwd(), 'files');
    const dest = path.join(process.cwd(), 'files_copy');

    try {
        await fs.access(src);
    } catch (err) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(dest);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') throw new Error('FS operation failed');
    }

    await fs.cp(src, dest, { recursive: true });
};

try {
    await copy()
} catch (err) {
    console.error(err.message);
}
