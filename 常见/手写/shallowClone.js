function shallowClone(object) {
  // 只拷贝对象
  if (!object || typeof object !== 'object') {
    return
  }
  let newObject = Array.isArray(object) ? [] : {}
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key]
    }
  }
  return newObject
}
