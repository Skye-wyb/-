Array.prototype.forEach = function(callback, thisArg){
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
	// 遍历数组
	while(index < len){
		callback.call(thisArg,arr[index],index,arr)
		index++
	}
}

let arr = [1, 2, 3, 4]
arr.forEach((item, index) => {
  console.log(item + '---' + index)
})