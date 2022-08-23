let wordBreak = function(s, wordDict){
	let dp = Array(s.length+1).fill(false)
	dp[0] = true
	for(let i=0;i<=s.length;i++){
		for(let j=0;j<wordDict.length;j++){
			if(i>=wordDict[j].length){
				is(s.slice(i-wordDict[j].length,i) === wordDict[j] && dp[i-wordDict[j].length]){
					dp[i] = true
				}
			}
		}
	}
	return dp[s.length]
}