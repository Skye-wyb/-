Function.prototype.bind = function(context,...args){
	if(typeof this !== 'function'){
		console.error()
	}
	context = Object(context) || window
	// let fn = this
	// return function Fn(...args2){
	// 	return fn.apply(this instanceof Fn ? this : context,args.concat(args2))
	// }
	let self = this
	return function(){
		let res = null
		let fn = Symbol('fn')
		context[fn] = self
		res = context[fn](...args.concat(args2))
		delete context[fn]
		return res
	}
	
}