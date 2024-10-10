const express = require("express");
const {Worker} = require("worker_threads");
const THREAD_COUNT = 4;
const app = express();

const port =  8001;

function createWorker() {
    return new Promise(function (resolve, reject) {
      const worker = new Worker("./four_workers.js", {
        workerData: { thread_count: THREAD_COUNT },
      });
      worker.on("message", (data) => {
        resolve(data);
      });
      worker.on("error", (msg) => {
        reject(`An error ocurred: ${msg}`);
      });
    });
}

app.get('/non-blocking', (req, res)=> {
    res.status(200).send("This is non blocking");
});

app.get("/blocking", async (req, res)=>{
    let counter=0;
    for(let i=0;i< 20_000_000_000;i++){
        counter++;
    }
    res.status(200).send(`result is ${counter}`);
})


app.get("/blocking-worker-1", async (req, res)=>{
    let worker = new Worker("./worker.js");
    worker.on("message", data => {
        res.status(200).send(`result is ${data}`);
    });
    worker.on("error", data => {
        res.status(404).send(`result is ${error}`);
    });
});

app.get("/blocking-worker-4", async (req, res)=>{
    const workerPromises = [];
    for (let i = 0; i < THREAD_COUNT; i++) {
        workerPromises.push(createWorker());
    }
    const thread_results = await Promise.all(workerPromises);
    const total =
    thread_results[0] +
    thread_results[1] +
    thread_results[2] +
    thread_results[3];
    res.status(200).send(`result is ${total}`);
    // let worker = new Worker("./worker.js");
    // worker.on("message", data => {
    //     res.status(200).send(`result is ${data}`);
    // });
    // worker.on("error", data => {
    //     res.status(404).send(`result is ${error}`);
    // });
});

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})