// main.js
const { Worker } = require('worker_threads');
const fs = require('fs');
const path = require('path');

const filePath = './large_file.txt'; // Path to your large file
const chunkSize = 1024; // 1 MB chunks
const workerCount = 4;
const workers = [];
const results = new Map();
let chunkIndex = 0;

const processFile = () => {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(filePath, { highWaterMark: chunkSize });

        readStream.on('data', (chunk) => {
            const worker = workers[chunkIndex % workerCount];
            worker.postMessage({ chunk: chunk.toString('utf-8'), index: chunkIndex });
            chunkIndex++;
        });

        readStream.on('end', () => {
            resolve();
            // readStream.close();
        });

        readStream.on('error', (err) => {
            reject(err);
            // readStream.close();
        });
    });
};

for (let i = 0; i < workerCount; i++) {
    const worker = new Worker(path.resolve(__dirname, 'worker.js'));
    workers.push(worker);

    worker.on('message', ({ index, result }) => {
        results.set(index, result);
        if (results.size === chunkIndex) {
            console.log('All chunks processed:', results);
            workers.forEach(w => w.terminate());
        }
    });
}

processFile().catch(err => console.error(err));
