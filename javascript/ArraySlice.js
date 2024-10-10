const chunk = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};

var chunk1 = function (arr, size) {
  let sol = [];
  for (let i = 0; i < arr.length; i += size) {
    sol.push(arr.slice(i, size + i));
  }
  return sol;
};

console.log(chunk1([1, 2, 3, 4], 1));
