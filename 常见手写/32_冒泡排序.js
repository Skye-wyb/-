function bubbleSort(nums){
	for(let i=0;i<nums.length-1;i++){
		for(let j=0;j<nums.length-i-1;j++){
			if(nums[j]>nums[j+1]){
				[nums[j],nums[j+1]] = [nums[j+1],nums[j]]
			}
		}
	}
	return nums
}

let nums = [4,1,9,3,8,5,7,2]
let ans = bubbleSort(nums)
console.log(ans);