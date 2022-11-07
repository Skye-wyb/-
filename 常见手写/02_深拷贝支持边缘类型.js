// WeakMap解决循环引用
function deepClone (obj, cache = new WeakMap()) {
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
      return obj.apply(this, args)
    }
  }
  // Map类型
  if (obj instanceof Map) {
    const copy = new Map()
    cache.set(obj, copy)
    for (let [key, value] of obj) {
      copy.set(key, typeof value == 'object' ? deepClone(value) : value)
    }
    return copy
  }
  // Set类型
  if (obj instanceof Set) {
    let copy = new Set()
    cache.set(obj, copy)
    for (let key of obj) {
      copy.add(typeof key == 'object' ? deepClone(key) : key)
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


let map = new Map()
map.set('name', '网易')
map.set('age', 23)
map.set('hooby', {
  name: 'netEasy',
  age: 25
})
let copy = deepClone(map)
copy.set('hobby', {
  name: '王一博',
  age: 25
})
console.log(copy);
console.log(map);

// let set = new Set([1, 2, 3, 4, 5, 6, 7, { name: '网易' }])
// let copy = deepClone(set)
// for (let key of copy) {
//     if (typeof key == 'object') {
//         key.name = '网易大厦'
//     }
// }
// console.log(copy);
// console.log(set);
