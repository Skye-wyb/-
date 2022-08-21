/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散法
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    // 奇数
    let l = i - 1,
      r = i + 1
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    if (ans.length < r - l - 1) {
      ans = s.substr(l + 1, r - l - 1)
    }
    ;(l = i), (r = i + 1)
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    if (ans.length < r - l - 1) {
      ans = s.substr(l + 1, r - l - 1)
    }
  }
  return ans
}
