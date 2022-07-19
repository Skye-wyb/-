function premute(nums) {
  let ans = []
  const dfs = path => {
    if (path.length === nums.length) {
      ans.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue
      }
      path.push(nums[i])
      dfs(path)
      path.pop()
    }
  }
  dfs([])
  return ans
}
