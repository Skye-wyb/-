function sum(...args) {
  let ans = 0
  ans = args.reduce((pre, item) => {
    return pre + item
  }, 0)
  let add = function (...args) {
    ans = args.reduce((pre, item) => {
      return pre + item
    }, ans)
    return add
  }
  add.valueOf = function () {
    console.log(ans)
  }
  return add
}

sum(1, 2, 3)(2).valueOf()
// 8
