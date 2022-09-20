function _new(Fn,...args){
	const instance = {}
	if(Fn.prototype){
		instance.__proto__ = Fn.prototype
	}
	const res = Fn.apply(instance,args)
	if(typeof res==='function' || (typeof res === 'object' && res!=null)){
		return res
	}
	return instance
}