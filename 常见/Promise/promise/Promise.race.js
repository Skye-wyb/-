Promise.race = function(promises){
	const len = promises.length
	return new Promise((resolve,reject)=>{
		for(let i=0;i<len;i++){
			promises[i].then(res=>{
				resolve(res)
			},err=>{
				reject(err)
			})
		}
	})
}