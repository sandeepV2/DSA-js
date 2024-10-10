
// let arr = [1,2,3,4,5]

// let rot = 2;

function rotRight(arr, rot){
    let lft =0;
    let right= arr.length -1;

    while(rot){
        let tmp = arr[right];
        for (let i=right;i >=0 ; i--){
            arr[i] = arr[i-1]
        }
        arr[0] = tmp;
        rot--;
    }
    return arr;
}

[1,2,3,4,5]
[2,3,4,5,1]
function leftRot(arr, rot){
    // O(n*k)
    let lft = 0;
    let right = arr.length -1;

    while(rot){
        let tmp = arr[lft];
        for(let i=1;i<=right;i++){
            arr[i-1] = arr[i]
        }
        arr[right] = tmp;
        --rot;
    }
    return arr;
}

function leftRotBatch(arr, rotK){
    // shift by k. space complexity O(k)
    let tmp = []
    for(let i=0;i<rotK;i++){
        tmp.push(arr[i])
    }
    console.log(tmp);
    let k = 0;
    for(let j=rotK; j<arr.length; j++){
        arr[k] = arr[j]
        k++;
    }
    console.log(arr);
    for(let x=0;x<tmp.length;x++){
        arr[arr.length-rotK+x] = tmp[x]
    }
    return arr
}

function reverseArr(arr, low, high){
    while(low < high){
        [arr[low], arr[high]] = [arr[high], arr[low]];
        low++;
        high--;
    }
    return arr;
}

function optimisedRotate(arr, k){
    let n = arr.length;
    arr = reverseArr(arr, 0, k-1);
    arr = reverseArr(arr, k, n-1);
    arr = reverseArr(arr, 0, n-1);
    return arr;
}

// console.log(rotRight(arr, rot));
console.log(leftRot([1,2,3,4,5], 2));
console.log(leftRotBatch([1,2,3,4,5], 2));
console.log(optimisedRotate([1,2,3,4,5], 2));