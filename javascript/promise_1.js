function demo() {
  function call_back(res, rej) {
    res(setTimeout(() => console.log("hello"), 1000));
    rej(() => console.log("sdfsdfs"));
  }
  return new Promise(call_back);
}

async function tt_1() {}
demo();
console.log(tt_1());

const err = new Error("slfsldfs");

console.log(err.name);
console.log(err.message);

async function helper() {
  function p1(t1) {
    return new Promise((res) => {
      setTimeout(() => res(console.log("p1")), 100);
    });
  }

  function p2(t2) {
    return new Promise((res) => {
      setTimeout(() => res(console.log("p2")), 150);
    });
  }
  //   let pt1 = p1(1000);
  //   let pt2 = p2(1500);
  return await Promise.race([p1, p2]);
}

var timeLimit = function (fn, t) {
  return async function (...args) {
    const ogPromise = fn(...args);
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([ogPromise, timeoutPromise]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

helper();
