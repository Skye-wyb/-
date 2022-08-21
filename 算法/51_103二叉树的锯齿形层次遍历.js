/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let ans = []
  if (!root) {
    return ans
  }
  let stack = [root]
  // 为true时向右，为left时向左
  let flag = true
  while (stack.length) {
    let len = stack.length
    let level = []
    for (let i = 0; i < len; i++) {
      let cur = stack.shift()
      level[flag ? 'push' : 'unshift'](cur.val)
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
    }
    // 切换方向
    flag = !flag
    ans.push(level)
  }
  return ans
}
