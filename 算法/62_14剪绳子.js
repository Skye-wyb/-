// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]k[1]...*k[m-1] 可能的最大乘积是多少
let cuttingRope = function(n){
	let dp = new Array(n+1).fill(0),nowBigger
	dp[2] = 1
	for(let i=2;i<=n;i++){
		for(let j=1;j<i;j++){
			nowBigger = Math.max(j*(i-j),j*dp[i-j])
			dp[i] = Math.max(dp[i],nowBigger)
		}
	}
	return dp[n]
}