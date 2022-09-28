// WeakMap解决循环引用
function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  // 防止循环引用
  if (cache.get(obj)) {
    return cache.get(obj)
  }
  // Date类型
  if (obj instanceof Date) {
    return new Date(obj.valueOf())
  }
  // 正则类型
  if (obj instanceof RegExp) {
    let flags = '',
      pattern = obj.valueOf()
    // 全局匹配
    flags += pattern.global ? 'g' : ''
    // 忽略大小写
    flags += pattern.ignoreCase ? 'i' : ''
    // 多行匹配
    flags += pattern.multiline ? 'm' : ''
    return new RegExp(pattern, flags)
    // 或者 return new RegExp(obj.source, obj.flags)
  }
  // 函数类型
  if (obj instanceof Function) {
    return function (...args) {
      obj.apply(this, args)
    }
  }
  // Map类型
  if (obj instanceof Map) {
    const copy = new Map()
    cache.set(obj, copy)
    for (let key in obj) {
      copy.set(
        key,
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
      )
    }
    return copy
  }
  // Set类型
  if (obj instanceof Set) {
    const copy = new Set()
    cache.set(obj, copy)
    for (let key in obj) {
      copy.add(typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    }
    return copy
  }

  // 数组、对象
  if (obj instanceof Array || obj instanceof Object) {
    const copyObj = Array.isArray(obj) ? [] : {}
    // 缓存copy对象，用于处理循环引用的情况
    cache.set(obj, copyObj)

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copyObj[key] =
          typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
      }
    }
    return copyObj
  }
}
