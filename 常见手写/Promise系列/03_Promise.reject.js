Promise.reject = function(err){
	return new Promise((resolve,reject)=>{
		reject(err)
	})
}