// 回溯
const subsets = function (nums) {
  const res = []
  const dfs = (index, list) => {
    if (index == nums.length) {
      res.push(list.slice())
      return
    }
    // 选择这个数
    list.push(nums[index])
    // 选择这个数递归
    dfs(index + 1, list)
    // 撤销选择这个数
    list.pop()
    // 不选择这个数递归
    dfs(index + 1, list)
  }
  dfs(0, [])
  return res
}
