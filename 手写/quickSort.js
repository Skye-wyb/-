// function quickSort(arr, left = 0, right = arr.length - 1) {
//   let { length } = arr
//   if (length > 1) {
//     let i = left
//     let j = right
//     let mid = arr[Math.floor((i + j) / 2)]
//     while (i < j) {
//       while (arr[i] < mid) {
//         i++
//       }
//       while (arr[j] > mid) {
//         j--
//       }
//       if (i <= j) {
//         ;[arr[i], arr[j]] = [arr[j], arr[i]]
//         i++
//         j--
//       }
//     }
//     if (i > left + 1) quickSort(arr, 0, i - 1)
//     if (i < right) quickSort(arr, i, right)
//   }
//   return arr
// }
function quickSort(arr, left = 0, right = arr.length - 1) {
  let { length } = arr
  if (length > 1) {
    i = left
    j = right
    let mid = arr[Math.floor((i + j) / 2)]
    while (i < j) {
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
    if (i > left + 1) quickSort(arr, 0, i - 1)
    if (i < right) quickSort(arr, i, right)
  }
  return arr
}
let arr = [5, 4, 2, 3, 1]
let ans = quickSort(arr)
console.log(ans)
