// 滑动窗口
let minSubArrayLen = function (target, nums) {
  const len = nums.length
  let l = (r = sum = 0)
  res = len + 1
  while (r < len) {
    sum += nums[r++]
    while (sum >= target) {
      res = res < r - l ? res : r - l
      sum -= nums[l++]
    }
  }
  return res > len ? 0 : res
}

// 输入：target = 7, nums = [2, 3, 1, 2, 4, 3]
// 输出：2
// 解释：子数组[4, 3] >= target 是该条件下的长度最小的子数组

let target = 7, nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLen(target, nums));
