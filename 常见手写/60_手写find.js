Array.prototype.find = function(callback, thisArg){
	if(!this){
		throw new TypeError('this is null or not defined')
	}
	// 判断callback是否为一个函数
	if(typeof callback !== 'function'){
		throw new TypeError(callback + 'is not a function')
	}
	
	const arr = this
	const len = arr.length
	let index = 0
	
	while(index < len){
		if(callback.call(thisArg,arr[index],index,arr)){
			return arr[index]
		}
		index++
	}
	
	// 没有满足条件的返回undefined
	return undefined
}

let arr = [1, 2, 3, 4]
let ans = arr.find((item, index) => {
  return item > 2
})
console.log(ans)
