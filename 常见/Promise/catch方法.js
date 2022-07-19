Promise.prototype.catch = function(onRejected){
    // 直接使用then方法实现
    return this.then(undefined,onRejected)
}