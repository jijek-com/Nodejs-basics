import fs from 'fs/promises';
import path from 'path';

const list = async () => {
    const dir = path.join(process.cwd(), 'files');

    let files;
    try {
        files = await fs.readdir(dir);
    } catch {
        throw new Error('FS operation failed');
    }

    console.log(files);
};

try {
    await list();
} catch (err) {
    console.error(err.message);
}

