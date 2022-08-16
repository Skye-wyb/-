// 1.原型链继承

// function Person(name) {
//   this.name = name
// }
// Person.prototype.sayHi = function () {
//   console.log('Hi')
//   return this.name
// }

// function Student() {}

// Student.prototype = new Person('网易')
// Student.prototype.constructor = Student

// let stu = new Student()
// console.log(stu.name)

// 2.构造函数继承

// function Person(name) {
//   this.name = name
//   this.obj = {
//     name: '网易',
//     age: 25
//   }
// }
// function Student() {}
// Student.prototype = new Person()
// Student.prototype.constructor = Student

// const stu = new Student()
// const stu1 = new Student()
// stu.obj.name = '腾讯'
// console.log(stu1.obj.name)

// 3.组合式继承

// function Person(name) {
//   this.name = name
// }
// Person.prototype.getName = function () {
//   return this.name
// }
// function Student() {
//   Person.apply(this, arguments)
// }

// function Person(name) {
//   this.name = name
// }
// Person.prototype.getName = function () {
//   return this.name
// }
// function Student() {
//   Person.apply(this, arguments)
// }
// Student.prototype = new Person()
// Student.prototype.constructor = Student

// 4. 寄生式组合继承

// function Person(name) {
//   this.name = name
// }
// Person.prototype.getName = function () {
//   return this.name
// }
// function Student() {
//   Person.apply(this, arguments)
// }
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

// ES6实现继承
class Person {
  constructor(name) {
    this.name = name
  }
}

class Student extends Person {}

let stu = new Student('网易')
console.log(stu.name)
