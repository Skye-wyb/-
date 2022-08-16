// function unique(arr) {
//   if (!Array.isArray(arr) || arr.length <= 1) {
//     return arr
//   }
//   let ans = []
//   arr.forEach(item => {
//     if (ans.indexOf(item) === -1) {
//       ans.push(item)
//     }
//   })
//   return ans
// }

// 利用set实现
function unique(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return arr
  }
  return [...new Set(arr)]
}

let arr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8]
let ans = unique(arr)
console.log(ans)
