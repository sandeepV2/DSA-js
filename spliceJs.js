
// let arr = [1,2,3,4,5]
let arr = [0,20,41]

for(let i=0;i<arr.length;i++){
    // console.log(i)
    if(arr[i]%2===0){
        arr.splice(i,1);
    }
    // console.log(arr);
}

//Splice replaces the element in place and index is affected.
// Traverse from the end.

for(let i=arr.length -1;i>=0;i--){
    if(arr[i]%2===0){
        arr.splice(i,1);
    }
}
console.log(arr);

let pp = [1,3,4,6,7,8]

console.log(pp.filter(p => p%2))