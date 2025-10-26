import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const stream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(stream);
};

await write();
