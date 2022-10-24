function quickSort (nums) {
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

function quickSort1 (nums, left = 0, right = nums.length - 1) {
  if (nums.length > 1) {
    let i = left, j = right, mid = nums[Math.floor((i + j) / 2)]
    while (i <= j) {
      while (nums[i] < mid) {
        i++
      }
      while (nums[j] > mid) {
        j--
      }
      if (i <= j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
      }
    }
    if (i > left + 1) quickSort(nums, left, i - 1)
    if (i < right) quickSort(nums, i, right)
  }
  return nums
}


let nums = [1, 6, 54, 85, 27, 3, 2, 99]
let ans = quickSort(nums)
console.log(ans)
