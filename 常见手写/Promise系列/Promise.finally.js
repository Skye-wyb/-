Promise.prototype.finally = function(callback){
	return this.then(val=>{
		return Promise.resolve(callback()).then(()=>{
			return val
		})
	},err=>{
		return Promise.resolve(callback()).then(()=>{
			throw err
		})
	})
}