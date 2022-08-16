function _setTimeout(fn,delay){
	let timer = null
	timer = setInterval(()=>{
		fn()
		clearInterval(timer)
	},delay)
	return ()=>{
		clearInterval(timer)
	}
}