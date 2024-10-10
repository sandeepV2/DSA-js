// Fixed sliding window.
//Input  : arr[] = {100, 200, 300, 400}, k = 2
//Output : 700


function getMaxOfKInArray(){
    let arr = [100, 300,300,150];
    let k=2;
    let max_sum=0;
    // get maximum of k elements in an array.
    for(let i=0;i<= arr.length-k;i++){
        let s=0;
        for(let j=i;j< i+k; j++){
            s+=arr[j]
        }
        if(s > max_sum){
            max_sum = s;
        }
    }
    return max_sum;
}

function optimisedMaxOfK(){
    let arr = [100, 300,300,150];
    let k=2;
    let max_sum=0;

    for(let i=0;i<k;i++){
        max_sum += arr[i]
    }
    
    let win_sum = max_sum;
    for(let i=k; i< arr.length; i++){
        win_sum = win_sum - arr[i-k] + arr[i]
        if (win_sum > max_sum){
            max_sum = win_sum;
        }
    }
    return max_sum;
}


function getKsizeSubString(){
    let ar = "abcd"
    let k=2;
    for(let i=0;i <= ar.length-k ;i++){
        let s ="";
        for (j=i;j< k+i;j++){
            s+= ar[j]
        }
        console.log(s);
    }

}


//print all substrings with k length.

//     console.log(i);
//     console.log(k);
//     console.log(arr.slice(i, k));
//     k++;
//
    // for(let j=k; j< arr.length;j++){

    //     console.log(arr.slice(i, j));
    // }
        
        // if(s >= max_sum){
        //     max_sum = s;
        // }
     

console.log(getMaxOfKInArray());
console.log(optimisedMaxOfK());
console.log(getKsizeSubString());
