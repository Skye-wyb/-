let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
function ListNode (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new ListNode()
let count = 0
function getTree (node, i) {
    node.val = i < nums.length ? nums[i] : null
    if (!node.val) {
        return
    }
    node.left = getTree(new ListNode(), 2 * i + 1)
    node.right = getTree(new ListNode(), 2 * i + 2)
    return node
}
let ans = getTree(root, 0)
console.log(ans);