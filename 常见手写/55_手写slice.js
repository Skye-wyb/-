String.prototype.slice = function(beginIndex, endIndex){
	let str = this
	// 处理beginIndex小于0的情况
	beginIndex < 0 ? str.length + beginIndex : beginIndex
	// 处理endIndex没有传的情况以及endIndex小于0的情况
	endIndex = endIndex === undefined ? str.length : endIndex < 0 ? str.length + endIndex : endIndex
	// 当beginIndex >= endIndex时，返回空字符串
	if(beginIndex >= endIndex) return ''
	let result = ''
	// 遍历拼接结果
	for(let i=beginIndex;i<endIndex;i++){
		result += str[i]
	}
	return result
}

let str = 'hellowyblove'
console.log(str.slice(5,8));