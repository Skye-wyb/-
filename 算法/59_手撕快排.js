let quickSort = function (nums, left = 0, right = nums.length - 1) {
  if (nums.length > 1) {
    let i = left,
      j = right
    let mid = nums[Math.floor((i + j) / 2)]
    while (i <= j) {
      while (nums[i] < mid) {
        i++
      }
      while (nums[j] > mid) {
        j--
      }
      if (i <= j) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
      }
    }
    if (i > left + 1) quickSort(nums, left, i - 1)
    if (i < right) quickSort(nums, i, right)
  }
  return nums
}

let nums = [7, 1, 9, 2, 4, 27, 0, 6, 85]
console.log(quickSort(nums))
