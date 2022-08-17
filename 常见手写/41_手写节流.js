// function throttle(fn,delay){
// 	let lastTime = 0
// 	return function(...args){
// 		let nowTime = Date.now()
// 		if(nowTime - lastTime > delay){
// 			fn.apply(this,args)
// 			lastTime = Date.now()
// 		}
// 	}
// }

// 闭包实现
function throttle(fn,delay){
	let flag = null
	return function(...args){
		if(flag) return
		flag = setTimeout(()=>{
			fn.apply(this,args)
			flag = null
		},delay)
	}
}

let fn = throttle(() => {
  console.log('hello')
}, 5000)
fn()
setTimeout(() => {
  fn()
}, 3000)
setTimeout(() => {
  fn()
}, 7000)
// 输出：hello,hello，函数只执行了2次