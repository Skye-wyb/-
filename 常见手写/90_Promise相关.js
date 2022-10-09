function Promise (executor) {
    this.promiseState = 'pending'
    this.promiseResult = null
    this.callbackList = []
    const resolve = val => {
        if (this.promiseState !== 'pending') return
        this.promiseState = 'fulfilled'
        this.promiseResult = val
        this.callbackList.forEach(callback => {
            callback.onResolved(val)
        })
    }
    const reject = err => {
        if (this.promiseState !== 'pending') return
        this.promiseState = 'rejected'
        this.promiseResult = err
        this.callbackList.forEach(callback => {
            callback.onRejected(err)
        })
    }
    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }
}
Promise.resolve = function (val) {
    return new Promise((resolve, reject) => {
        if (val instanceof Promise) {
            val.then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        } else {
            resolve(val)
        }
    })
}
Promise.reject = function (err) {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}
Promise.prototype.then = function (onResolved, onRejected) {
    let self = this
    return new Promise((resolve, reject) => {
        const handleCallback = callback => {
            try {
                let res = callback(self.promiseResult)
                if (res instanceof Promise) {
                    res.then(val => {
                        resolve(val)
                    }, err => {
                        reject(err)
                    })
                } else {
                    resolve(res)
                }
            } catch (err) {
                reject(err)
            }
        }
        if (self.promiseState === 'fulfilled') {
            handleCallback(onResolved)
        }
        if (self.promiseState === 'rejected') {
            handleCallback(onRejected)
        }
        if (self.promiseState === 'pending') {
            self.callbackList.push({
                onResolved: () => {
                    handleCallback(onResolved)
                },
                onRejected: () => {
                    handleCallback(onRejected)
                }
            })
        }
    })
}

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(val => {
                resolve(val)
            }, err => {
                reject(err)
            })
        })
    })

}

Promise.all = function (promises) {
    let len = promises.length
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(val => {
                result.push(val)
                if (result.length === len) {
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

Promise.allSettled = function (promises) {
    let len = promises.length
    let result = []
    return new Promise((resolve, reject) => {
        if (len === 0) {
            resolve([])
        }
        promises.forEach(promise => {
            promise.then(val => {
                result.push({
                    status: 'fulfilled',
                    value: val
                })
                if (result.length === len) {
                    resolve(result)
                }
            }, err => {
                result.push({
                    status: 'rejected',
                    reason: err
                })
                if (result.length === len) {
                    reject(result)
                }
            })
        })
    })
}