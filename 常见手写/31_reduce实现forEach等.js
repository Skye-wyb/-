// 1.reduce实现forEach
Array.prototype.forEach = function(handler){
	this.reduce((prev,item,index)=>{
		handler(item,index)
	},0)
}

// let arr = [1, 2, 3, 4, 5]
// function fn(item, index) {
//   console.log(item + 1)
// }

// arr.forEach(fn)

// 2.reduce实现map
Array.prototype.map = function(handler){
	let ans = []
	this.reduce((prev,item,index)=>{
		ans[index] = handler(item,index)
	},0)
	return ans
}

// let arr = [1, 2, 3, 4, 5]
// function fn(item, index) {
//   return item+1
// }
// console.log(arr.map(fn));

// 3.reduce实现filter
Array.prototype.filter = function(handler){
	let ans = []
	this.reduce((prev,item,index)=>{
		if(handler(item,index)){
			ans.push(item)
		}
	})
	return ans
}

let arr = [1, 2, 3, 4, 5]
function fn(item, index) {
  return item>2
}
console.log(arr.filter(fn));