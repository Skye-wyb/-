// setIntervalÊµÏÖsetTimeout

function mySetTimeout(fn,delay){
	let timer = null
	timer = setInterval(()=>{
		fn()
		clearInterval(timer)
	},delay)
	return ()=>{
		clearInterval(timer)
	}
}

const fn = () => {
  console.log('hello')
}

mySetTimeout(fn, 2000)
