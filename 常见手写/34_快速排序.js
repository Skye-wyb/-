// function quickSort(arr){
// 	if(arr.length<2){
// 		return arr
// 	}
// 	let mid = Math.floor(arr.length/2)
// 	let pivot = arr.splice(mid,1)[0]
// 	let left = [],right = []
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]<pivot){
// 			left.push(arr[i])
// 		}else{
// 			right.push(arr[i])
// 		}
// 	}
// 	return quickSort(left).concat([pivot],quickSort(right))
// }

// 优化版本
function quickSort(arr,left=0,right=arr.length-1){
	let {length} = arr
	if(length>1){
		let i=left,j=right
		let mid = arr[Math.floor((i+j)/2)]
		while(i<=j){
			while(arr[i]<mid){
				i++
			}
			while(arr[j]>mid){
				j--
			}
			if(i<=j){
				[arr[i],arr[j]] = [arr[j],arr[i]]
				i++
				j--
			}
		}
		if(i>left+1) quickSort(arr,left,i-1)
		if(i<right) quickSort(arr,i,right)
	}
	return arr
}

let arr = [1, 2, 7, 8, 4, 3, 13, 23, 41, 0]
let ans = quickSort(arr)
console.log(ans)