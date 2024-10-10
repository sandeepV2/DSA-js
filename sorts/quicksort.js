
function quicksort(arr){
    if(arr.length < 2){
        return arr;
    } else {
        let pivot = arr[0];

        let less = arr.slice(1).filter(a => a <= pivot);

        let greater = arr.slice(1).filter(a => a > pivot);

        return [...quicksort(less), pivot, ...quicksort(greater)];
    }

}

console.log(quicksort([5,1,2, -1, 4, 11, 3]))