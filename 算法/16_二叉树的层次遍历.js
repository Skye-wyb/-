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