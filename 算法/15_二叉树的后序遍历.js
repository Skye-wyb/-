function postOrder(root){
	let ans = []
	function dfs(node){
		if(node){
			dfs(node.left)
			dfs(node.right)
			ans.push(node.val)
		}
	}
	dfs(root)
	return ans
}

// 栈
function postOrder(root){
	if(!root){
		return []
	}
	let ans = []
	let stack = [root]
	while(stack.length){
		let o = stack.pop()
		ans.unshift(o.val)
		o.left && stack.push(o.left)
		o.right && stack.push(o.right)
	}
	return ans
}