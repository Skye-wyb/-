// function flat(arr) {
//   if (!Array.isArray(arr)) return
//   let res = []
//   res = arr.reduce((pre, item) => {
//     return pre.concat(Array.isArray(item) ? flat(item) : item)
//   }, [])
//   return res
// }

// function flat(arr) {
//   return arr
//     .toString()
//     .split(',')
//     .map(Number)
// }

function flat(arr){
	if(!Array.isArray(arr)) return
	let ans = []
	for(let a of arr){
		ans = ans.concat(...a)
	}
	return ans
}
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 11, 12, [14,15,16],13]
]
let ans = flat(arr)
console.log(ans)
