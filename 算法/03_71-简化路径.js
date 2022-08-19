let simplifyPath = function(path){
	let stack = []
	let str = ''
	let arr = path.split('/')
	arr.forEach(val=>{
		if(val && val==='..'){
			stack.pop()
		}else if(val && val !='.'){
			stack.push(val)
		}
	})
	arr.length ? str = '/'+stack.join('/'):str='/'
	return str
}