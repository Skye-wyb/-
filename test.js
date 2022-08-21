var threeSum = function (nums) {
  let ans = []
  function dfs(temp) {
    if (temp.length === 3) {
      // if (getSum(temp) === 0 && !isSame(ans, temp)) {
      ans.push([...temp])
      // }
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue
      }
      temp.push(nums[i])
      dfs(temp)
      temp.pop()
    }
  }
  dfs([])
  return ans
}

let ans = threeSum([-1, 0, 1, 2, -1, -4])
console.log(ans)
