Promise.prototype.catch = function(onRejected){
	// 直接使用then实现
	return this.then(undefined,onRejected)
}