let maxDepth = function(root){
	if(!root){
		return 0
	}
	let stack = [root]
	let num = 0
	while(stack.length){
		let len = stack.length
		num++
		while(len--){
			const o = stack.shift()
			o.left && stack.push(o.left)
			o.right && stack.push(o.right)
		}
	}
	return num
}