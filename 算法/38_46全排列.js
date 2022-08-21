// 回溯算法
let premute = function (nums) {
  let ans = []
  dfs([])
  function dfs(path) {
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
  return ans
}

// 交换法
let permute1 = function (nums) {
  let ans = []
  function swap(p, q) {
    if (p === q) {
      return
    }
    ;[nums[p], nums[q]] = [nums[q], nums[p]]
  }
  function dfs(p, q) {
    if (p === q) {
      ans.push([...nums])
      return
    }
    for (let i = p; i <= q; i++) {
      swap(p, i)
      dfs(p + 1, q)
      // 回溯，返回原来的状态
      swap(p, i)
    }
    dfs(0, nums.length - 1)
    return ans
  }
}
