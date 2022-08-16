Function.prototype.apply = function(context){
	if(typeof this !== 'function'){
		console.error()
	}
	let res = null
	context = Object(context) || window
	let fn = Symbol('fn')
	context[fn] = this
	if(arguments[1]){
		res = context[fn](...arguments[1])
	}else{
		res = context[fn]()
	}
	delete context[fn]
	return res
}

let fn = function(a,b){
	console.log(this);
	return a+b
}
let ans = fn.apply({name:'网易'},[1,2])
console.log(ans);