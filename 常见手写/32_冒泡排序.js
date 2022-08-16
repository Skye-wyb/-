// function bubbleSort(nums){
// 	for(let i=0;i<nums.length-1;i++){
// 		for(let j=0;j<nums.length-i-1;j++){
// 			if(nums[j]>nums[j+1]){
// 				[nums[j],nums[j+1]] = [nums[j+1],nums[j]]
// 			}
// 		}
// 	}
// 	return nums
// }

// 改进版本
function bubbleSort(arr){
	let temp = null,flag = 1
	for(let i=0;i<arr.length-1 && flag===1;i++){
		for(let j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				// 发生数据交换置为1
				flag = 1
			}
		}
	}
	return arr
}

let nums = [4,1,9,3,8,5,7,2]
let ans = bubbleSort(nums)
console.log(ans);