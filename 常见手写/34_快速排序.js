function quickSort (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let leftArr = [], rightArr = [], res = []
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[0]) {
      leftArr.push(nums[i])
    } else {
      rightArr.push(nums[i])
    }
  }
  res = res.concat(quickSort(leftArr), nums[0], quickSort(rightArr))
  return res
}

// 更高效的快排
function _quickSort (arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    let i = left, j = right
    let mid = arr[Math.floor((i + j) / 2)]
    while (i <= j) {
      while (arr[i] < mid) {
        i++
      }
      while (arr[j] > mid) {
        j--
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      }
    }
    if (i > left + 1) {
      _quickSort(arr, left, i - 1)
    }
    if (i < right) {
      _quickSort(arr, i, right)
    }
  }
  return arr
}