function _instanceof(target,object){
	let p = object.prototype
	let proto = Object.getPrototypeOf(target)
	while(true){
		if(proto === p){
			return true
		}
		proto = Object.getPrototypeOf(proto)
	}
	return false
}