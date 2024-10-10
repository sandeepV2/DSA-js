const {parentPort} = require("worker_threads");


parentPort.on("message", ({idx, chunk})=> {
    const res = processChunk(chunk);
    parentPort.postMessage({idx, res});
})

function processChunk(chunk){
    let workCount = chunk.split(/\s+/).length;
    return {count: workCount};
}