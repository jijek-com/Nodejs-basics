import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { release, version } from 'node:os';
import fs from 'node:fs/promises';
import { createServer as createServerHttp } from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

const readJson = async (fileName) => {
    const filePath = path.join(__dirname, 'files', fileName);
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
};

const aJson = await readJson('a.json');
const bJson = await readJson('b.json');

const unknownObject = random > 0.5 ? aJson : bJson;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};
