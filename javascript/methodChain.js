var expect = function (val) {
  return {
    toBe: (val1) => {
      return val1 === val ? true : new Error("Not Equal");
    },
    notToBe: (val2) => {
      return val2 !== val ? true : new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

var createCounter = function (init) {
  let n = init;
  function increase() {
    return ++n;
  }
  function decrese() {
    return --n;
  }
  function reset() {
    return init;
  }
  return {
    increase,
    decrese,
    reset,
  };
};

const counter = createCounter(5);
counter.increase(); // 6
counter.reset(); // 5

let testArray = [...Array(5).keys()];

for (const i of testArray) {
  console.log(i, typeof i);
}
testArray.forEach((item, i) => {
  console.log(item, typeof item);
});

let sum1 = testArray.reduce((prev, cur) => prev + cur, 0);
console.log(sum1);

const G = () => {
  return new Promise((res, rej) => {
    res(
      setTimeout(() => console.log("success")),
      2
    );
  });
};

(async () => await G())();
