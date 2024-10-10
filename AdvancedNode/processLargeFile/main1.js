const fs = require('fs');
const {Worker} = require("worker_threads");
const path = require("path");


const chunkSize = 1024; //1kb
const workerCount = 4;
let chunkIdx =0;
const workers = []
const result = new Map();


for(let i=0;i<workerCount;i++){
    let worker = new Worker('./worker1.js');
    workers.push(worker);

    worker.on("message", (res)=> {
        result.set(i, res);

        if (result.size === chunkIdx){
            console.log("All the chucks processed", result);
            workers.forEach(worker => worker.terminate());
        }
    })

}

const processFile = () => {
    return new Promise((resolve, reject)=> {
        const rl = fs.createReadStream('./large_file.txt',  { highWaterMark: chunkSize })

        rl.on('data', (chunk) => {
            let worker = workers[chunkIdx % workerCount];
            worker.postMessage({chunk : chunk.toString('utf-8'), index: chunkIdx});
            chunkIdx++;
        })

        rl.on('end', () => {
            resolve();
            rl.close();
        })

        rl.on('error', (err) => {
            reject(err);
            rl.close();
        })
    })
}



// const asyncRead = () => {
//     return new Promise((resolve, reject)=> {
//         let d = ''
//         rl.on("data", chuck => {
//            d+=chuck;
//         });

//         rl.on("end", () => {
//             resolve();
//             console.log(d);
//         });

//         rl.on("error", () => {
//             reject();
//         })
//     })
// }

(async () => {
    await processFile();
    // rl.close();
})();
// rl.close();