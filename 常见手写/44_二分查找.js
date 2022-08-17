function binarySearch(nums,target){
	let i=0,j=nums.length-1
	while(i<=j){
		const mid = Math.floor((i+j)/2)
		const midValue = nums[mid]
		if(target === midValue){
			return mid
		}else if(target < midValue){
			j = mid - 1
		}else{
			i = mid + 1
		}
	}
	return -1
}

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let ans = binarySearch(nums, 5)
console.log(ans)