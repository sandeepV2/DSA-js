const fs = require("fs");

const readStream = fs.createReadStream("./my_file.txt", {highWaterMark : 20});

let chunkCount = 0;

readStream.on("data", (chunk)=>{
    if(chunkCount === 2){
        readStream.pause();
    }
    setTimeout(() => {
        readStream.resume();
    }, 3000);
    console.log(`Chunk ${chunkCount}> ${chunk.toString()}`);
    chunkCount++
})