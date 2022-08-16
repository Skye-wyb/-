let count = 1;
let promiseFunction = () =>
  new Promise((rs) =>
    setTimeout(() => {
      rs(count++);
    }, 1000)
  );

function firstPromise(promiseFunction) {
  let p = null;
  return function (...args) {
    // 请求的实例，已存在意味着正在请求中，直接返回实例，不触发新的请求
    return p
      ? p
      // 否则发送请求，且在finally时将p置空，那么下一次请求可以重新发起
      : (p = promiseFunction.apply(this, args).finally(() => (p = null)));
  };
 
}


let firstFn = firstPromise(promiseFunction);
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1

setTimeout(() => {
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
}, 3000);
