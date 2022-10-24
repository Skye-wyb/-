function invertTree (root) {
    if (!root) {
        return root
    }
    let stack = [root]
    while (stack.length) {
        const n = stack.shift()
        let left = n.left, right = n.right
        n.left = right, n.right = left
        n.left && stack.push(n.left)
        n.right && stack.push(n.right)
    }
    return root
}

// 递归版本
let invertTree = (root) => {
    if (!root) return root
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}