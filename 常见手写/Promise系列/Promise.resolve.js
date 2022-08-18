Promise.resolve = function(val){
	return new Promise((resolve,reject)=>{
		if(val instanceof Promise){
			val.then(res=>{
				resolve(res)
			},err=>{
				reject(err)
			})
		}else{
			resolve(val)
		}
	})
}