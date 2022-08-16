function unique(arr){
	if(!Array.isArray(arr) || arr.length<=1){
		return arr
	}
	// let ans = []
	// for(let num of arr){
	// 	if(ans.indexOf(num)===-1){
	// 		ans.push(num)
	// 	}
	// }
	// return ans
	
	return [...new Set(arr)]
}

let arr = [1,2,2,2,3,4,5,5,6,7,7,8,8]
console.log(unique(arr));