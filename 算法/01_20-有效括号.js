let isValid = function(s){
	const queue = []
	const map = {
		'(':')',
		'{':'}',
		'[':']'
	}
	for(let i=0;i<s.length;i++){
		const temp = s[i]
		if(map[temp]){
			queue.unshift(map[temp])
		}else{
			if(queue[0]===temp){
				queue.shift()
			}else{
				return false
			}
		}
	}
	return queue.length === 0
}