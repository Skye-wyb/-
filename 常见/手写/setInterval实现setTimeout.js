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

function fn(){
	console.log('网易');
}
_setTimeout(fn,1000)