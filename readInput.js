const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let name = rl.question("Whats your name", (name) => {
//     // console.log(`Input: ${name}`);
//     rl.close();
//     return name;
// })

const readLineAsync = (msg) => {
    return new Promise((resolve)=> {
        rl.question(msg, userRes =>{
            resolve(userRes);
        });
    });
}

// console.log(name);

const startApp = async() =>{
    const name = await readLineAsync("Whats name?");
    console.log(name);
    rl.close();
}

startApp();