// let kthSmallest = function (root, k) {
//   let ans = []
//   function addArr(root) {
//     if (root) {
//       ans.push(root.val)
//       addArr(root.left)
//       addArr(root.right)
//     }
//   }
//   addArr(root)
//   ans.sort((a, b) => a - b)
//   return ans[k - 1]
// }
// 二叉搜索树中序遍历结果为有序数组
let kthSmallest = function (root, k) {
  let ans = []
  let stack = []
  let o = root
  while (stack.length || o) {
    while (o) {
      stack.push(o)
      o = o.left
    }
    let n = stack.pop()
    ans.push(n.val)
    o = n.right
  }
  return ans[k - 1]
}
