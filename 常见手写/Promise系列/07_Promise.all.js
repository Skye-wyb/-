Promise.all = function(promises){
	let len = promises.length
	let count = 0
	let result = []
	return new Promise((resolve,reject)=>{
		for(let i=0;i<len;i++){
			Promise.resolve(promises[i]).then(val=>{
				count++
				result[i] = val
				if(count === len){
					resolve(result)
				}
			},err=>{
				reject(err)
			})
		}
	})
}