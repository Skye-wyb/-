Array.prototype.reduce = function(callback, initialValue){
	if(!this){
		throw new TypeError('this is null or not defined')
	}
	// 判断callback是否为一个函数
	if(typeof callback !== 'function'){
		throw new TypeError(callback + 'is not a function')
	}
	
	const arr = this
	const len = arr.length
	
	// 在没有初始值的空数组上调用callback将报错
	if(len===0 && initialValue === undefined){
		throw new TypeError('Reduce of empty array with no initial value')
	}
	
	let index = 0
	let accumulator = initialValue
	// 没传入初始值取第一个
	if(initialValue === undefined){
		index = 1
		accumulator = arr[0]
	}
	while(index < len){
		accumulator = callback(accumulator,arr[index],index,arr)
		index++
	}
	return accumulator
}

let arr = [1, 2, 3, 4]
let ans = arr.reduce((pre, cur) => {
  return (pre += cur)
})
console.log(ans)