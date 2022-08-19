let diameterOfBinaryTree = function(root){
	let res = 0
	function depth(root){
		if(!root){
			return 0
		}
		const leftHeight = depth(root.left)
		const rightHeight = depth(root.right)
		res = Math.max(leftHeight+rightHeight,res)
		return 1+Math.max(leftHeight,rightHeight)
	}
}