// 判断任意两个类型的数据是否相等
function isEqual(a, b) {
  // if (typeof a !== typeof b) {
  //   return false
  // } else {
  if (typeof a === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  } else {
    return a == b
  }
  // }
}

console.log(isEqual(1, '1'))
