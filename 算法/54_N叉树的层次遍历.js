let levelOrder = function (root) {
  if (!root) {
    return []
  }
  let ans = []
  let queue = [root]
  while (queue.length) {
    let temp = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      temp.push(node.val)
      if (node.children) {
        queue.push(...node.children)
      }
    }
    ans.push(temp)
  }
  return ans
}
