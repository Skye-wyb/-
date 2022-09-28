let levelOrder = function(root){
	let ans = []
	function traverse(root,depth){
		if(root){
			if(!ans[depth]){
				ans[depth] = []
			}
			ans[depth].push(root.val)
			traverse(root.left,depth+1)
			traverse(root.right,depth+1)
		}
	}
	traverse(root,0)
	return ans
}

let levelOrder = function(root){
	if(!root){
		return []
	}
	let ans = []
	let stack = [root]
	while(stack.length){
		let len = stack.length
		let temp = []
		for(let i=0;i<len;i++){
			let o = stack.shift()
			temp.push(o.val)
			o.left && stack.push(o.left)
			o.right && stack.push(o.right)
		}
		ans.push(temp)
	}
	return ans
}