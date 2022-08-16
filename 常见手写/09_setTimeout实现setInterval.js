function _setInterval(fn,delay){
	let timer = null
	let interval = ()=>{
		timer = setTimeout(()=>{
			fn()
			interval()
		},delay)
	}
	interval()
	return ()=>{
		clearTimeout(timer)
	}
}