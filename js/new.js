// function _new(Fn, ...args) {
//   // 1.创建一个新对象
//   const instance = {}
//   // 2.实例化对象原型指向构造函数的原型
//   if (Fn.prototype) {
//     instance.__proto__ = Fn.prototype
//   }
//   // 3.将构造函数this指向新对象
//   const res = Fn.apply(instance, args)
//   // 4.判断返回值
//   if (typeof res === 'function' || (typeof res === 'object' && res !== null)) {
//     return res
//   }
//   return instance
// }

function _new(Fn, ...args) {
  // 1.创建新对象，将实例化对象原型指向构造函数的原型对象
  const instance = Object.create(Fn.prototype)
  // 2.改变this指向
  const res = Fn.apply(instance, args)
  // 3.判断返回值
  return typeof res === 'object' ? res : instance
}

function Person(name) {
  this.name = name
}

let stu = _new(Person, '网易')
console.log(stu.name)
