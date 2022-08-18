Promise.race = function(promises){
	let len = promises.length
	return new Promise((resolve,reject)=>{
		for(let i=0;i<len;i++){
			Promise.resolve(promises[i]).then(val=>{
				resolve(val)
			},err=>{
				reject(err)
			})
		}
	})
}