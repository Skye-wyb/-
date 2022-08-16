// 类型判断函数
// function getType(value) {
//   if (value === null) {
//     return value + ''
//   }
//   // 引用类型
//   if (typeof value === 'object') {
//     let valueClass = Object.prototype.toString.call(value)
//     let type = valueClass.split(' ')[1].split('')
//     type.pop()
//     return type.join('').toLowerCase()
//   } else {
//     // 基本类型
//     return typeof value
//   }
// }

function getType(value){
	const str = Object.prototype.toString.call(value)
	return str.replace(/\[object (.*?)\]/,'$1').toLowerCase()
}

console.log(getType()) // undefined
console.log(getType(null)) // null
console.log(getType(1)) // number
console.log(getType('前端')) // string
console.log(getType(true)) // boolean
console.log(getType(Symbol('前'))) // symbol
console.log(getType({})) // object
console.log(getType([])) // array

