let fib = function(n){
	if(n===1){
		return 1
	}
	let first = 1,second = 2
	for(let i=3;i<=n;i++){
		let third = first + second
		first = second
		second = third
	}
	return second
}
let fib = function(n){
	if(n<=1){
		return n
	}
	let dp = []
	dp[0] = 0
	dp[1] = 1
	for(let i=2;i<=n;i++){
		dp[i] = dp[i-1]+dp[i-2]
	}
	return dp[n]
}