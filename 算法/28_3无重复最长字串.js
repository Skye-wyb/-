let lengthOfLongestSubstring = function (s) {
  let res = []
  let max = 0
  for (let str of s) {
    while (res.includes(str)) {
      res.shift()
    }
    res.push(str)
    max = Math.max(max, res.length)
  }
  return max
}

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));