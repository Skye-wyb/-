// 大小为n的数组nums：多数元素是指出现次数大于Math.floor(n/2)的元素
let majorityElement = function(nums){
	nums.sort((a,b)=>a-b)
	return nums[Math.floor(nums.length/2)]
}