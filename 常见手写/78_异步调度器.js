// 带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个

class Scheduler{
	constructor(){
		this.queue = []
		this.maxCount = 2
		this.runCount = 0
	}
	
	// promiseCreator执行后返回的是一个Promise
	add(promiseCreator){
		this.queue.push(promiseCreator)
		// 每次添加时尝试执行任务
		this.runQueue()
	}
	
	runQueue(){
		// 队列中还有任务才会被执行
		if(this.queue.length && this.runCount < this.maxCount){
			// 执行先加入队列的函数
			const promiseCreator = this.queue.shift()
			// 开始执行任务 计数+1
			this.runCount += 1
			// 假设任务都执行成功
			try{
				promiseCreator().then(()=>{
					// 任务执行完毕 计数-1
					this.runCount -= 1
					// 尝试下一次任务
					this.runQueue()
				})
			}catch(err){
				throw(err)
			}
		}
	}
}
   
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
  
const scheduler = new Scheduler()
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

