Object.create = function (proto, propertiesObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null.')
  }
  if (propertiesObject === null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  function F() {}
  // 绑定原型
  F.prototype = proto
  // 新建实例对象
  const obj = new F()

  // 自定义属性
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject)
  }

  if (proto === null) {
    // 如果proto为空，则清空原型
    obj.__proto__ = null
  }
  return obj
}
