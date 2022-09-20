let minDepth = function(root){
	if(!root){
		return 0
	}
	const stack = [[root,1]]
	while(stack.length){
		const [o,n] = stack.shift()
		if(!o.left && !o.right){
			return n
		}
		if(o.left){
			stack.push([root.left,n+1])
		}
		if(o.right){
			stack.push([root.right,n+1])
		}
	}
}