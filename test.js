<<<<<<< HEAD
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
=======
<<<<<<< HEAD
Object.prototype.fn = function () {
  console.log('Object')
}
Function.prototype.fn = function () {
  console.log('Function')
}
let f = function () {}
console.log(f.fn())
=======
let p = new Promise((resolve,reject)=>{
	resolve()
}).then(res=>{
	console.log(5555);
}).then(res=>{
	console.log(6666);
})
>>>>>>> 77ab73e874629741b4b91aeea51d0cde0f85be78
>>>>>>> ba3da66809eafe6bb8711166426a11c7897bbd61
