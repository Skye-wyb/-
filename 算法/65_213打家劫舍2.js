let rob = function(nums){
	if(nums.length<1){
		return 0
	}
	if(nums.length===1){
		return nums[0]
	}
	// 不偷第一家
	let arr1 = nums.slice(1)
	// 不偷最后一家
	let arr2 = nums.slice(0,nums.length-1)
	
	// 创建dp数组
	let pd1 = new Array(arr1.length).fill(0)
	let dp2 = new Array(arr2.length).fill(0)
	
	dp1[0] = arr1[0]
	dp2[0] = arr2[0]
	for(let i=1;i<arr1.length;i++){
		dp1[i] = Math.max(dp1[i-1],dp1[i-2]?dp1[i-2]+arr1[i]:arr1[i])
	}
	for(let i=1;i<arr2.length;i++){
		dp2[i] = Math.max(dp2[i-1],dp2[i-2]?dp2[i-2]+arr2[i]:arr2[i])
	}
	return Math.max(dp1[dp1.length-1],dp2[dp2.length-1])
}