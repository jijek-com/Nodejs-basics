import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToRemove.txt');
    try {
        await fs.unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

try {
    await remove();
} catch (err) {
    console.error(err.message);
}
