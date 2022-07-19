function quickSort(nums) {
  if (nums.length < 2) {
    return nums
  }
  let mid = Math.floor(nums.length / 2)
  let midNum = nums.splice(mid, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < midNum) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return quickSort(left).concat([midNum], quickSort(right))
}

let nums = [1, 6, 54, 85, 27, 3, 2, 99]
let ans = quickSort(nums)
console.log(ans)
