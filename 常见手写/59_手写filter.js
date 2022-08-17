Array.prototype.filter = function(callback, thisArg){
	if(!this){
		throw new TypeError('this is null or not defined')
	}
	// 判断callback是否为一个函数
	if(typeof callback !== 'function'){
		throw new TypeError(callback + 'is not a function')
	}
	
	const arr = this
	const len = arr.length
	
	const newArr = []
	let index = 0
	while(index < len){
		if(callback.call(thisArg,arr[index],index,arr)){
			newArr.push(arr[index])
		}
		index++
	}
	return newArr
}

let arr = [1, 2, 3, 4]
let ans = arr.filter((item, index) => {
  return item > 2
})
console.log(ans)