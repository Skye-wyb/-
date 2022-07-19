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
