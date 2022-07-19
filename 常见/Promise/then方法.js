function Promise(executor) {
  // 保存promise状态
  this.promiseState = 'pending'
  // 保存promise结果
  this.promiseResult = null
  // 用于保存异步回调函数列表
  this.callbackList = []
  const resolve = val => {
    // 状态只能修改一次
    if (this.promiseState !== 'pending') return
    // 修改状态
    this.promiseState = 'fulfilled'
    this.promiseResult = val
    // 调用成功的回调【callbackList存起来的】
    for (let callback of this.callbackList) {
      callback.onResolved(val)
    }
  }
  const reject = err => {
    // 状态只能修改一次
    if (this.promiseState !== 'pending') return
    // 修改状态
    this.promiseState = 'rejected'
    this.promiseResult = err
    // 调用失败的回调【callbackList存起来的】
    for (let callback of this.callbackList) {
      callback.onRejected(err)
    }
  }
  // 加try catch 是因为，throw err也相当于调用reject了
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}
// then方法
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this
  // then方法会返回Promsie
  return new Promise((resolve, reject) => {
    // 对返回值的处理进行封装
    const handleCallback = callback => {
      // 如果回调函数抛出错误，则reject
      try {
        const res = callback(self.promiseResult)
        if (res instanceof Promise) {
          // 如果res是Promise
          res.then(
            val => resolve(val),
            err => reject(err)
          )
        } else {
          // 如果res不是Promise
          resolve(res)
        }
      } catch (err) {
        reject(err)
      }
    }
    // 处理回调函数
    if (this.promiseState === 'fulfilled') {
      handleCallback(onResolved)
    }
    if (this.promiseState === 'rejected') {
      handleCallback(onRejected)
    }
    /*
     * 如果是pending状态，则异步任务，在改变状态的时候去调用回调函数
     * 所以要保存回调函数
     * 因为promise实例阔以指定多个回调，于是采用数组
     */
    if (this.promiseState === 'pending') {
      this.callbackList.push({
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

let p = new Promise((resolve, reject) => {
  console.log('kkkkkkkkkk')
  resolve('hello')
})
p.then(
  res => {
    console.log('kkkk', res)
  },
  err => {
    console.error(err)
  }
)
