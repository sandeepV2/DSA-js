
let success = false;

const createPromise = () => {
    return new Promise((resolve, reject)=> {
        if(success){
            resolve("I am the man!");
        } else {
            reject("I am a fool!");
        }

    }) 
}



createPromise().then(console.log).catch(console.log)