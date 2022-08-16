class eventEmitter{
	constructor(){
		this.events = {}
	}
	// 绑定
	on(event,callback){
		let callbacks = this.events[event] || []
		callbacks.push(callback)
		this.events[event] = callbacks
		return this
	}
	// 解绑
	off(event,callback){
		let callbacks = this.events[event]
		this.events[event] = callback && callback.filter(fn=>{
			fn!==callback
		})
		return this
	}
	// 触发
	emit(event,...args){
		let callbacks = this.events[event]
		callbacks.forEach(callback=>{
			callback(...args)
		})
		return this
	}
	// 仅触发一次
	once(event,callback){
		let wrapFun = function(...args){
			callback(...args)
			this.off(event,callback)
		}
		this.on(event,wrapFun)
		return this
	}
}