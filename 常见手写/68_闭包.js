/**
 * 
 ## 实现一个函数，可以第一次调用输出false，第二次调用输出true
 
 闭包函数维持一个对外部函数变量的引用，即使函数执行完毕函数中的和变量也没有被垃圾回收机制清除，依旧保留上一次的值。
 */

const outputBool = (function(){
	let bool = true
	return function(){
		bool = !bool
		return bool
	}
})()

console.log(outputBool())
console.log(outputBool())
console.log(outputBool())
console.log(outputBool())