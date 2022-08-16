function getType(value){
	if(value === null){
		return value+''
	}
	// 引用类型
	if(typeof value === 'object'){
		let valueClass = Object.prototype.toString.call(value)
		let type = valueClass.split(' ')[1].split('')
		type.pop()
		return type.join('').toLowerCase()
	}else{
		// 基本类型
		return typeof value
	}
}

let str = 'string'
let num = 123
let flag = true
let array = [2,3,4]
let fn = function(){}
let object = {}
console.log(getType(str));
console.log(getType(num));
console.log(getType(flag));
console.log(getType(array));
console.log(getType(fn));
console.log(getType(object));