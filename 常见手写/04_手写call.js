Function.prototype.call = function(context,...args){
	if(typeof this !== 'function'){
		console.error()
	}
	let res = null
	context = Object(context) || window
	let fn = Symbol('fn')
	context[fn] = this
	res = context[fn](...args)
	delete context[fn]
	return res
}

let fn = function(a,b){
	console.log(this);
	return a+b
}
let ans = fn.call({name:'网易'},1,2)
console.log(ans);