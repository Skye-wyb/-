// 递归
function inOrder(root){
	let ans = []
	function dfs(node){
		if(node){
			dfs(node.left)
			ans.push(node.val)
			dfs(node.right)
		}
	}
	dfs(root)
	return ans
}

// 栈
function inOrder(root){
	if(!root){
		return []
	}
	let ans = []
	let stack = []
	let o = root
	while(stack.length || o){
		while(o){
			stack.push(o)
			o = o.left
		}
		const n = stack.pop()
		ans.push(n.val)
		o = n.right
	}
	return ans
}