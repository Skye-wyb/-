function sum(...args) {
	const add = (...args2)=>{
		args = [...args,...args2]
		return add
	}
	add.valueOf = function(){
		let ans = args.reduce((prev,item)=>{
			return prev+item
		},0)
		// console.log(ans);
		return ans
	}
	return add
	
	// let ans = 0
	// ans = args.reduce((prev,item)=>{
	// 	return prev+item
	// },0)
	// let add = function(...args){
	// 	ans = args.reduce((prev,item)=>{
	// 		return prev+item
	// 	},ans)
	// 	return add
	// }
	// add.valueOf = function(){
	// 	console.log(ans);
	// }
	// return add
}

// sum(1, 2, 3)(2).valueOf()
// 8
console.log(sum(1, 2, 3).valueOf()) // 6
console.log(sum(2, 3)(2).valueOf()) // 7
console.log(sum(1)(2)(3)(4).valueOf()) // 10
console.log(sum(2)(4, 1)(2).valueOf()) // 9