const readline = require("readline");
// const readlineSync = require('readline-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const readLineAsync = (msg) => {
    return new Promise((res)=>{
        rl.question(msg, (data)=>{
            res(data);
        })
    })
}

class Employee{
    #id;
    #name;
    constructor(name, id){
        this.#name = name;
        this.#id = id;
    }

    getDetails(){
        return `ID : ${this.#id}, NAME : ${this.#name}`;
    }
}

const empArray = [];
const startApp = async ()=>{
    for(let i=0;i<2;i++){
        const name = await readLineAsync(`whats your name ${i}?`);
        let empObj = new Employee(name, i);
        empArray.push(empObj);
        // console.log(empObj.getDetails());
    }
    // for (emp of empArray){
    //     console.log(emp.getDetails());
    // }
    rl.close();
}

(async()=>{
    await startApp();
    empArray.map(emp => console.log(emp.getDetails()));
})();


