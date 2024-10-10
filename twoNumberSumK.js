// Two numbers in an array adding up to k.

let arr = [1,2,4,8,9,3,5]
let k = 17

function bruteForce(arr, k){
    // O(n**2)
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if((arr[i]+ arr[j]) === k){
                return [arr[i], arr[j]];
            }
        }
    }
    return []
}

function twoPointer(arr, k){
    // sort would take O(nlogn)
    // loop iterates through o(n)
    let sArr = arr.sort((a, b) => a-b );
    let low = 0;
    let high = sArr.length -1;

    while(low < high){
        let twoPsum = sArr[low] + sArr[high]
        if (twoPsum === k){
            return [sArr[low], sArr[high]];
        }
        if (twoPsum < k){
            low++;
        } else {
            high--;
        }
    }
    return []
}

// using binary search it is nlogn



console.log(bruteForce(arr, k));
console.log(twoPointer(arr, k));
