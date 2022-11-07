const path = require("path")

let sumNumbers = function (root) {
  const dfs = function (root, path) {
    if (!root) {
      return 0
    }
    path = path * 10 + root.val
    // 当是叶子节点时
    if (!root.left && !root.right) {
      return path
    }
    return dfs(root.left, path) + dfs(root.right, path)
  }
  return dfs(root, 0)
}
