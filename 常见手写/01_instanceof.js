// 判断构造函数的原型对象是否在对象的原型链上
function _instanceof(obj,target){
	let prototype = target.prototype
	let proto = Object.getPrototypeOf(obj)
	while(proto){
		if(proto===prototype){
			return true
		}
		proto = Object.getPrototypeOf(proto)
	}
	return false
}

let obj = function () {}
console.log(_instanceof(obj, Function))
console.log(_instanceof(obj, Object))

