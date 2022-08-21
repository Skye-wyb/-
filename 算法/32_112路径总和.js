// 根节点到叶子节点总和为target
let hasPathSum = function (root, sum) {
  if (!root) {
    return null
  }
  if (!root.left && !root.right) {
    return sum - root.val === 0
  }
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}
