function Promise(executor){
	this.promiseState = 'pending'
	this.promiseResult = null
	this.callbackList = []
	const resolve = val =>{
		if(this.promiseState!=='pending'){
			return
		}
		this.promiseState = 'fulfilled'
		this.promiseResult = val
		this.callbackList.forEach(callback =>{
			callback.onResolved(val)
		})
	}
	
	const reject = err =>{
		if(this.promiseState!=='pending'){
			return
		}
		this.promiseState = 'rejected'
		this.promiseResult = err
		this.callbackList.forEach(callback =>{
			callback.onRejected(err)
		})
	}
	
	try{
		executor(resolve,reject)
	}catch(err){
		reject(err)
	}
}