Promise.allSettled = function(promises){
	let len = promises.length
	let count = 0
	let result = []
	return new Promise((resolve,reject)=>{
		if(len === 0){
			return resolve([])
		}
		promises.forEach((promise,i)=>{
			Promise.resolve(promise).then(res=>{
				count++
				result[i] = {
					status:'fulfilled',
					value:res
				}
				if(count === len){
					resolve(result)
				}
			},err=>{
				count++
				result[i] = {
					status:'rejected',
					reason:err
				}
				if(count === len){
					resolve(result)
				}
			})
		})
	})
}