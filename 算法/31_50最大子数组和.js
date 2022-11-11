let maxSubArray = function (nums) {
  let sum = 0,
    ans = nums[0]
  for (let num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }
  return ans
}

let maxSubArray1 = function (nums) {
  let prev = nums[0]
  let ans = nums[0]
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    ans = Math.max(ans, prev)
  }
  return ans
}

// 输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出：6
// 解释：连续子数组[4, -1, 2, 1] 的和最大，为 6 。
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));