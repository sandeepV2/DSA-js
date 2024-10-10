import cluster from "cluster";

import os from "os";

console.log(os.cpus());

for(let i=0;i<2;i++){
    cluster.fork();
}