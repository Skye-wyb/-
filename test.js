Object.prototype.fn = function () {
  console.log('Object')
}
Function.prototype.fn = function () {
  console.log('Function')
}
let f = function () {}
console.log(f.fn())
