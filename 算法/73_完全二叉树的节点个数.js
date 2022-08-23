let countNodes = function(root){
	let num = 0
	if(!root){
		return num
	}
	let stack = [root]
	while(stack.length){
		let len = stack.length
		let temp = []
		for(let i=0;i<len;i++){
			let node = stack.shift()
			temp.push(node.val)
			node.left && stack.push(node.left)
			node.right && stack.push(node.right)
		}
		ans+=temp.length
	}
	return num
}