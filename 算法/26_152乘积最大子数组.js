// 乘积最大的非空连续子数组
let maxProduce = function (nums) {
  let ans = -Infinity,
    max = 1,
    min = 1
  for (const num of nums) {
    if (num < 0) {
      ;[max, min] = [min, max]
      max = Math.max(max * num, num)
      min = Math.min(min * num, num)
      ans = Math.max(max, ans)
    }
  }
  return ans
}
