let wordBreak = function (s, wordDict) {
	let dp = Array(s.length + 1).fill(false)
	dp[0] = true
	for (let i = 0; i <= s.length; i++) {
		for (let j = 0; j < wordDict.length; j++) {
			if (i >= wordDict[j].length) {
				if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
					dp[i] = true
				}
			}
		}
	}
	return dp[s.length]
}




// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true

let s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict));