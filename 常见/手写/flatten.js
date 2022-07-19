let arr = [1, [2, [3, 4, 5], 7, 8], 9, 10]
// function flatten(arr) {
//   let ans = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       ans = ans.concat(flatten(arr[i]))
//     } else {
//       ans.push(arr[i])
//     }
//   }
//   return ans
// }

// 利用reduce
// function flatten(arr) {
//   return arr.reduce((pre, next) => {
//     return pre.concat(Array.isArray(next) ? flatten(next) : next)
//   }, [])
// }

// 利用toString()和split()
function flatten(arr) {
  return arr.toString().split(',')
}

let ans = flatten(arr)
console.log(ans)
