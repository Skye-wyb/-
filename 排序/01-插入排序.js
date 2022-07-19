function insertSort(nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let temp = nums[i]
    let j = i - 1
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = temp
  }
  return nums
}

let nums = [1, 5, 3, 7, 9, 2, 10, 34, 0]
let ans = insertSort(nums)
console.log(ans)
