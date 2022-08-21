let moveZeroes = function (nums) {
  let res = new Array(nums.length).fill(0)
  let count = 0
  for (let num of nums) {
    if (num !== 0) {
      res[count++] = num
    }
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i]
  }
}
