let [n,k] = [5,2]
let nums = [1,5,3,4,2]
let count = 0
let dp = new Array(n).fill(Infinity)
dp[0] = 0
dp[1] = nums[1]>nums[0]?nums[1]-nums[0]:0
for(let i=2;i<dp.length;i++){
	for(let j=i-k;j<i;j++){
		dp[i] = Math.min(dp[i],nums[i]>nums[j]?dp[j]+(nums[i]-nums[j]):dp[j])
	}
}
console.log(dp[n-1]);