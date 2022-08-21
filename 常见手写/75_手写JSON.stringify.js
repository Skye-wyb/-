JSON.stringify = function (data) {
  let type = typeof data
  if (type !== 'object') {
    let result = data
    if (Number.isNaN(data) || data === Infinity) {
      // NaN和Infinity序列化返回null
      result = 'null'
    } else if (
      type === 'function' ||
      type === 'undefined' ||
      type === 'symbol'
    ) {
      // function序列化返回undefined，所以和undefined、symbol一起处理
      return undefined
    } else if (type === 'string') {
      result = '"' + data + '"'
    }
    return String(result)
  } else if (type === 'object') {
    if (data === null) {
      return 'null'
    } else if (data.toJSON && typeof data.toJSON === 'function') {
      // 对象可能内置toJSON方法来自定义序列化对象
      return JSON.stringify(data.toJSON())
    } else if (data instanceof Array) {
      let result = []
      data.forEach((item, index) => {
        if (
          typeof item === 'undefined' ||
          typeof item === 'function' ||
          typeof item === 'symbol'
        ) {
          result[index] = 'null'
        } else {
          result[index] = JSON.stringify(item)
        }
      })
      result = '[' + result + ']'
      return result.replace(/'/g, '"')
    }
  } else {
    // 处理普通对象
    let result = []
    Object.keys(data).forEach((item, index) => {
      if (typeof item !== 'symbol') {
        // key 如果是symbol对象则忽略
        if (
          data[item] !== undefined &&
          typeof data[item] !== 'function' &&
          typeof data[item] !== 'symbol'
        ) {
          // 键值如果是undefined、function、symbol为属性值，忽略
          result.push('"' + item + '":' + JSON.stringify(data[item]))
        }
      }
    })
    return ('{' + result + '}').replace(/'/g, '"')
  }
}

console.log(JSON.stringify({ name: '王一博', age: 25 }))
