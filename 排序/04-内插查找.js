let interpolationSearch = function (arr, searchValue) {
  let left = 0
  let right = arr.length - 1
  if (searchValue < arr[left] || searchValue > arr[right]) return -1
  let mid
  while (left < right) {
    mid = Math.ceil(
      ((searchValue - arr[left]) / (arr[right] - arr[left])) * (right - left)
    )
    if (searchValue == arr[mid]) return mid
    else if (searchValue < arr[mid]) right = mid - 1
    else if (searchValue > arr[mid]) left = mid + 1
  }
}
let arr = [-200, -100, 1, 2, 3, 4, 5, 7, 8]
console.log(interpolationSearch(arr, -100))
