let invertTree = function(root){
	if(!root){
		return root
	}
	let temp = root.left
	root.left = root.right
	root.right = temp
	
	invertTree(root.left)
	invertTree(root.right)
	return root
}

// 层次遍历
let invertTree = function(root){
	if(!root){
		return root
	}
	let stack = [root]
	while(stack.length){
		let n = stack.shift()
		// 交换左右子树
		[n.left,n.right] = [n.right,n.left]
		n.left && stack.push(n.left)
		n.right && stack.push(n.right)
	}
	return root
}
