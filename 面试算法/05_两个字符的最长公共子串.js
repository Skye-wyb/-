// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
// text1 = "abcde", text2 = "ace"   输出：3

var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length,m = text2.length
    let dp = Array.from(Array(text1.length+1), () => Array(text2.length+1).fill(0));
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[n][m]
};
