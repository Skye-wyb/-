let removeDuplicates = function(s){
	let stack = []
	for(let v of s){
		let prev = stack.pop()
		if(prev!==v){
			stack.push(prev)
			stack.push(v)
		}
	}
	return stack.join('')
}