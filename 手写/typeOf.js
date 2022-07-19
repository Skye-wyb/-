// 类型判断函数
function getType(value) {
  if (value === null) {
    return value + ''
  }
  // 引用类型
  if (typeof value === 'object') {
    let valueClass = Object.prototype.toString.call(value)
    let type = valueClass.split(' ')[1].split('')
    type.pop()
    return type.join('').toLowerCase()
  } else {
    // 基本类型
    return typeof value
  }
}

let obj = []
console.log(getType(obj))

