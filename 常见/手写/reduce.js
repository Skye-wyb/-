Array.prototype.reduce = function (callback, initialValue) {
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

  // 在没有初始值的空数组上调用callback将报错
  if (len === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  let index = 0
  let accumulator = initialValue
  // 没传入初始值时，取数组的第一个元素为初始值
  if (initialValue === undefined) {
    index = 1
    accumulator = arr[0]
  }
  // 遍历调用
  while (index < len) {
    // 更新accumulator
    accumulator = callback(accumulator, arr[index], index, arr)
    index++
  }
  // 返回累计处理的结果
  return accumulator
}

let arr = [1, 2, 3, 4]
let ans = arr.reduce((pre, cur) => {
  return (pre += cur)
})
console.log(ans)
