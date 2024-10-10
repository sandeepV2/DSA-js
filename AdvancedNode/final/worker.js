// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', ({ chunk, index }) => {
    const result = processChunk(chunk);
    parentPort.postMessage({ index, result });
});

const processChunk = (chunk) => {
    // Simulate processing the chunk (e.g., counting words)
    const words = chunk.split(/\s+/).length;
    return { wordCount: words };
};

