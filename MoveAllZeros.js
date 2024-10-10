//Move all the zeros of array at the end.

let arr = [1,2,0,3,5]
let count = 0;
for(let i=0;i<arr.length;i++){
    if (arr[i] !== 0){
        arr[count] = arr[i];
        count++
    }
}

while(count < arr.length){
    arr[count++] = 0;
}

console.log(arr);