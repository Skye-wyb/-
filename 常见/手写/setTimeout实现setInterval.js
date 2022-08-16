function _setInterval(fn,delay){
	let timer = null
	let interval = ()=>{
		timer = setTimeout(()=>{
			fn.apply(this)
			interval()
		},delay)
	}
	interval()
	return ()=>{
		clearTimeout(timer)
	}
}

function fn(){
	console.log('网易');
}

_setInterval(fn,1000)