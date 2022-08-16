function curry(fn){
	const res = function(...args){
		if(args.length<fn.length){
			return function(...args2){
				return res.apply(this,args.concat(args2))
			}
		}else{
			return fn.apply(this,args)
		}
	}
	return res
}