Array.prototype.my_filter = function (fn) {
  if (typeof fn !== 'function') {
    throw Error('参数必须为函数！')
  }
  const res = []
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && res.push(this[i])
  }
  return res
}
let arr = [1, 2, 3, 4, 5, 6]

let ans = arr.my_filter(n => n > 2)
console.log(ans)
