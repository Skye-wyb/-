function binarySearch (arr, target) {
  let i = 0,
    j = arr.length - 1
  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    let value = arr[mid]
    if (value == target) {
      return mid
    } else if (target < value) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return -1
}

let a = [4, 4, 4, 4, 4, 4, 4, 4]
let ans = binarySearch(a, 4)
console.log(ans)
