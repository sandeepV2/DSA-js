// Initially classes were not supported in javascript.

// Create class using function using closure.

function factoryFunction() {
  let val = 0;

  function increment() {
    return ++val;
  }

  return {
    increment: increment,
  };
}

let class1 = factoryFunction();

class1.increment();
console.log(class1.increment());

let class2 = factoryFunction();
console.log(class2.increment());

// hoisting. function is available to use before definition.

hoistAdd(2, 3);

function hoistAdd(a, b) {
  console.log(a + b);
}

try {
  arrowNohoist();
} catch (err) {
  debugger;
  console.log("no hoisting");
}

const arrowNohoist = () => {
  return "Arrow functions are not hoisted";
};
