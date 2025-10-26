import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
    const cpuCount = os.cpus().length;
    const promises = [];

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(path.resolve('./src/wt/worker.js'));

        const promise = new Promise((resolve) => {
            worker.on('message', (msg) => resolve(msg));
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
                if (code !== 0) resolve({ status: 'error', data: null });
            });

            worker.postMessage(10 + i);
        });

        promises.push(promise);
    }

    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();
