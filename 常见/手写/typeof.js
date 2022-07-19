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
    // 基本数据类型
    return typeof value
  }
}

let a = []
console.log(getType(a))
