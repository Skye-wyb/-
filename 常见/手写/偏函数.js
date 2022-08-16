function partial(fn, ...args) {
  return function (...newArgs) {
    return fn.call(this, ...args, ...newArgs)
  }
}

const add = function (a, b, c, d) {
  return a + b + c + d
}

// partialAdd已经固定了a、b参数，它目前只接收两个参数，即c、d参数
const partialAdd = partial(add, 1, 2)

console.log(partialAdd(3, 4)) // 10
