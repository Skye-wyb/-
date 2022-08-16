// sum(2,3,4,5) ----> sum(2)(3)(4)(5)

function curry(fn) {
  const res = function (...args) {
    if (args.length < fn.length) {
      // 返回一个函数处理剩余的参数
      return function (...args2) {
        return res.apply(this, args.concat(args2))
      }
    } else {
      return fn.apply(this, args)
    }
  }
  return res
}

let fn = function (a, b, c, d) {
  return a + b + c + d
}
let curryFn = curry(fn)
console.log(curryFn(1, 2)(3)(4))
