// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr
//   }
//   let mid = Math.floor(arr.length / 2)
//   let midValue = arr.splice(mid, 1)[0]
//   let left = [],
//     right = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < midValue) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([midValue], quickSort(right))
// }

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 2) {
    let i = left,
      j = right
    let mid = arr[Math.floor((i + j) / 2)]
    while (i <= j) {
      while (arr[i] < mid) {
        i++
      }
      while (arr[j] > mid) {
        j--
      }
      if (i <= j) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      }
    }
    if (i > left + 1) quickSort(arr, left, i - 1)
    if (i < right) quickSort(arr, i, right)
  }
  return arr
}
let arr = [1, 5, 2, 7, 8, 3, 4, 60, 9]
console.log(quickSort(arr))
