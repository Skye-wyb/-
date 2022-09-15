<<<<<<< HEAD
Object.prototype.fn = function () {
  console.log('Object')
}
Function.prototype.fn = function () {
  console.log('Function')
}
let f = function () {}
console.log(f.fn())
=======
let p = new Promise((resolve,reject)=>{
	resolve()
}).then(res=>{
	console.log(5555);
}).then(res=>{
	console.log(6666);
})
>>>>>>> 77ab73e874629741b4b91aeea51d0cde0f85be78
