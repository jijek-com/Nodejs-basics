import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const input = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const output = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const gunzip = zlib.createGunzip();

    input.pipe(gunzip).pipe(output);
};

await decompress();
