// Create list of async tasks and execute them in series.

function asyncTask(i){
    return new Promise((res,rej)=>{
        setTimeout(()=> console.log(`This is task ${i}`), i*100);
    })
}

const taskList = [
    asyncTask(7),
    asyncTask(8),
    asyncTask(9),
    asyncTask(10)
]

const asyncInSeries = async(promises) => {
    for(let task of promises){
        try{
            const result = await task;
            console.log(result);
        }catch(e){
            console.log(e);
        }
    }
}

const asyncInSeries1 = (promises) => {
    let promise = promises.shift();
    promise.then((data) => console.log(data));

    if(promise.length > 0){
        asyncInSeries1(promises);
    }
}

asyncInSeries1(taskList);