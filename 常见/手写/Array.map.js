Array.prototype.my_map = function (fn) {
  if (typeof fn !== 'function') {
    throw Error('参数必须为函数')
  }
  let res = []
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i]))
  }
  return res
}

let arr = [1, 2, 3, 4, 5]
let ans = arr.my_map(n => n * 2)
console.log(ans)
