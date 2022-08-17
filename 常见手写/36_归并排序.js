function mergeSort(arr){
	if(arr.length<2){
		return arr
	}
	let mid = Math.floor(arr.length/2)
	const merge = function(leftArr,rightArr){
		let resArr = []
		while(leftArr.length && rightArr.length){
			resArr.push(leftArr[0]<rightArr[0]?leftArr.shift():rightArr.shift())
		}
		return resArr.concat(leftArr).concat(rightArr)
	}
	return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)))
}

let arr = [1, 2, 7, 8, 4, 3, 13, 23, 41, 0]
let ans = mergeSort(arr)
console.log(ans)