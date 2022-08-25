Promise.prototype.then = function(onResolved,onRejected){
	const self = this
	return new Promise((resolve,reject)=>{
		const handleCallback = callback =>{
			try{
				const res = callback(self.promiseResult)
				if(res instanceof Promise){
					res.then(val=>{
						resolve(val)
					},err=>{
						reject(err)
					})
				}else{
					resolve(res)
				}
			}catch(err){
				reject(err)
			}
		}
		if(self.promiseState === 'fulfilled'){
			handleCallback(onResolved)
		}
		if(self.promiseState === 'rejected'){
			handleCallback(onRejected)
		}
		if(self.promiseState === 'pending'){
			this.callbackList.push({
				onResolved:function(){
					handleCallback(onResolved)
				},
				onRejected:function(){
					handleCallback(onRejected)
				}
			})
		}
	})
}