

let arr = []

for (let i=0;i<6;i++){
    arr[i] = i;
}

console.log(arr);
let sum = arr.reduce((prev, cur)=>{ 
    let nextV =  prev + cur ;
    return nextV }, 0)

console.log(sum);