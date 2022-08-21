let arr = [1, 2, 3]
function allSort(arr) {
  let ans = []
  function dfs(temp) {
    if (temp.length === arr.length) {
      ans.push([...temp])
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (temp.includes(arr[i])) {
        continue
      }
      temp.push(arr[i])
      dfs(temp)
      temp.pop()
    }
  }
  dfs([])
  return ans
}
console.log(allSort(arr))
