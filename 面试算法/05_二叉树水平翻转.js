function invertTree(tree) {
    if (!tree) {
        return tree
    }
    let stack = [tree]
    while (stack.length) {
        let n = stack.shift()
        [n.left, n.right] = [n.right, n.left]
        n.left && stack.push(n.left)
        n.right && stack.push(n.right)
    }
    return tree
};