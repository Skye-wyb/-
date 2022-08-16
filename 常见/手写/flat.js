// reduce实现版本
// Array.prototype.flat = function () {
//   let arr = this
//   return arr.reduce((pre, item) => {
//     // 如果数组元素也为数组，则递归调用
//     return pre.concat(Array.isArray(item) ? item.flat() : item)
//   }, [])
// }

// 栈实现版本
Array.prototype.flat = function () {
  const stack = [...this]
  const result = []
  while (stack.length > 0) {
    // 弹出最后一个值
    const val = stack.pop()
    if (Array.isArray(val)) {
      // 解体再入栈
      stack.push(...val)
    } else {
      // 往数组前面推
      result.unshift(val)
    }
  }
  return result
}

let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
let ans = arr.flat()
console.log(ans)
