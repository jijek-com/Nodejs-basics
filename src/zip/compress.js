import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const input = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const output = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);
};

await compress();
