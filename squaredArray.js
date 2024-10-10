
// Given the array with -ve and +ve numbers in sorted order 
// Output : Give a sorted squared array.

const array1 = [-6, -1, 2, 5, 7]

const brutForce = (array1) => {
    return (array1.map(arr => arr * arr)).sort((a, b)=> (a -b));
}

console.log(brutForce(array1));

function optimisedFun(array) {
    const newArray = new Array(array.length).fill(0);
    console.log(array);
    // O(n)
    let posLeft = 0;
    let posRight = array.length-1 ;

    for (let i= array.length -1; i >= 0 ; i--){
        let sqrLeft = Math.pow(array[posLeft], 2);
        let sqrRight = Math.pow(array[posRight], 2);

        // if (posRight === posLeft){
        //     break;
        // }
        console.log(posLeft, posRight);
        console.log(i);

        if (sqrLeft > sqrRight){
            newArray[i] = sqrLeft;
            posLeft++
        } else {
            newArray[i] = sqrRight;
            posRight--;
        }
    }
    return newArray;
}

console.log(optimisedFun(array1));