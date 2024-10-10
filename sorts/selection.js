
// find min of array 
// swap it with zero ele 

function find_min(arr){
    let min_x = arr[0];
    let idx =0;
    for(let i=0;i<arr.length;i++){
        // console.log(i);
        // console.log(arr[i] < min_x);
        if(arr[i] < min_x ){
            min_x = arr[i];
            idx =i;
         }
    }
    return idx;
}

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let idx = find_min(arr.slice(i));
        // console.log(min_x);
        idx+=i;
        // [arr[i], arr[idx]] = [arr[idx], arr[i]]
        let tmp = arr[idx];
        arr[idx] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}

let inpArr = [3,5,6,7,1,-3,0, -6, 9, -10]

// inpArr.sort((a, b)=> a-b);
// console.log(inpArr);
console.log(bubbleSort(inpArr));