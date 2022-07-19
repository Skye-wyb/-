let arr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8]
let map = new Map()
let ans = []
for (let i = 0; i < arr.length; i++) {
  if (!map.has(arr[i])) {
    ans.push(arr[i])
    map.set(arr[i], i)
  }
}
console.log(ans)
