function compose(fns){
	if (!fns.length) {
	    throw new TypeError('必须传入函数类型')
	  }
	  for (let fn of fns) {
	    if (typeof fn !== 'function') {
	      throw new TypeError('必须传入函数类型')
	    }
	  }
	return function(...args){
		let index = 0
		let res = fns[index].apply(this,args)
		while(++index < fns.length){
			res = fns[index].call(this,res)
		}
		return res
	}
}