// List all the leaders in array.
// An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader.

let arr1 = [16, 17, 4, 3, 5, 2];
let Output = [17, 5, 2];

let arr2 = [1, 2, 3, 4, 5, 2];
let Output2 = [5, 2];

function leader(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flg = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        flg = false;
      }
    }
    if (flg) {
      console.log(arr[i]);
      flg = true;
    }
  }
}

function optimised(arr) {
  // traverse from right to left.
  let n = arr.length;
  let curL = arr[n - 1];
  console.log(curL);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > curL) {
      curL = arr[i];
      console.log(curL);
    }
  }
}
// leader([3, 2, 1]);
optimised(arr1);
