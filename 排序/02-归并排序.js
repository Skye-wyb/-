function mergeSort(nums) {
  if (nums.length < 2) {
    return nums
  }
  let mid = Math.floor(nums.length / 2)
  let merge = function (leftArr, rightArr) {
    let resultArr = []
    while (leftArr.length && rightArr.length) {
      resultArr.push(
        leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift()
      )
    }
    return resultArr.concat(leftArr).concat(rightArr)
  }
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}

let nums = [1, 6, 2, 9, 37, 3, 65, 4, 85, 27, 7, 8, 5]
let ans = mergeSort(nums)
console.log(ans)
