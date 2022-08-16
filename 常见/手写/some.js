Array.prototype.some = function (callback, thisArg) {
  // 判断this不等于null
  if (this === null) {
    throw new TypeError('this is null or not defined')
  }

  // 判断callback是不是一个函数
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  const arr = this
  const len = arr.length

  let index = 0
  // 遍历数组
  while (index < len) {
    // 只要有一个通过测试则返回true
    if (callback.call(thisArg, arr[index], index, arr)) {
      return true
    }
    index++
  }
  // 若全部未通过测试则返回false
  return false
}

let arr = [1, 2, 3, 4]
let ans = arr.some(item => item > 2)
console.log(ans)
