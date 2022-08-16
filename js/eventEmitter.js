class eventEmitter {
  constructor() {
    this.events = {}
  }
  // 绑定
  on(event, callback) {
    let callbacks = this.events[event] || []
    callbacks.push(callback)
    this.events[event] = callbacks
    return this
  }
  // 移除
  off(event, callback) {
    let callbacks = this.events[event]
    this.events[event] = callbacks && callbacks.filter(fn => fn !== callback)
    return this
  }
  // 触发
  emit(event, ...args) {
    let callbacks = this.events[event]
    callbacks.forEach(fn => {
      fn(...args)
    })
    return this
  }
  // 仅能触发一次
  once(event, callback) {
    let wrapFun = function (...args) {
      callback(...args)
      this.off(event, wrapFun)
    }
    this.on(event, wrapFun)
    return this
  }
}
