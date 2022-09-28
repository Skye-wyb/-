let Base = {
  name: '王一博',
}
let A = function (name) {
  this.name = name
}
A.prototype = Object.create(Base)
let a = new A('赵子绮')
Base.name = '赵媛媛'
console.log(a.name)
delete a.name
console.log(a.name)
// 赵子绮
// 赵媛媛
