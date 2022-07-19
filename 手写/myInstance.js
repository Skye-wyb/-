function myInstance(obj, Target) {
  // 对象身上的proto
  let proto = Object.getPrototypeOf(obj)
  // 原型对象
  let prototype = Target.prototype
  while (true) {
    if (!proto) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

let obj = function () {}
console.log(myInstance(obj, Function))
console.log(myInstance(obj, Object))
