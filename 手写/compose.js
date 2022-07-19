// 实现函数的组合
function compose(...fns) {
  if (!fns.length) {
    throw new TypeError('必须传入函数类型')
  }
  for (let fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('必须传入函数类型')
    }
  }
  //   返回一个自动依次执行的函数
  function composeFn(...args) {
    // 先执行一次
    let index = 0
    let res = fns[index].apply(this, args)
    // 拿到上一次的结果，调用下一个函数，获得新的结果
    while (++index < fns.length) {
      res = fns[index].call(this, res)
    }
    return res
  }
  return composeFn
}

function add(num1, num2) {
  console.log(this)
  return num1 + num2
}
function double(num) {
  console.log(this)
  return num * 2
}
function square(num) {
  console.log(this)
  return num ** 2
}

const newFn = compose(add, double, square)
const res = newFn.call('call', 10, 20)
console.log(res);
