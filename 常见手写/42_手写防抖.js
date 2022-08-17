function debounce(fn,delay){
	let timer = null
	return function(...args){
		// 清除上一次的定时器
		clearTimeout(timer)
		timer = setTimeout(()=>{
			fn.apply(this,args)
		})
	}
}

let fn = debounce(function () {
  console.log('hello')
}, 4000)
fn()
fn()
// 输出：hello，函数只执行了1次