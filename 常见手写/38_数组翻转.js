function reverse(nums){
	for(let i=0;i<nums.length/2;i++){
		[nums[i],nums[nums.length-1-i]] = [nums[nums.length-i-1],nums[i]]
	}
	return nums
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = reverse(arr)
console.log(ans)