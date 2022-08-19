// 递归实现
function preOrder(root){
	let ans = []
	function dfs(node){
		if(node){
			ans.push(node.val)
			// 遍历左子树
			dfs(node.left)
			// 遍历右子树
			dfs(node.right)
		}
	}
	dfs(root)
	return ans
}

// 栈的实现
function preOrder(root){
	if(!root){
	        return []
	    }
	let ans = []
	let stack = [root]
	while(stack.length){
		let node = stack.pop()
		ans.push(node.val)
		// 先是右子树
		node.right && stack.push(node.right)
		// 左子树
		node.left && stack.push(node.left)
	}
	return ans
}