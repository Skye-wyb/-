function debounce(func, delay) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
	timer = setTimeout(()=>{
		func.apply(this,args)
	},delay)
   }
}

function fn(){
	console.log('kkkk');
}

let fun = debounce(fn,3000)
fun()
setTimeout(()=>{
	fun()
},2000)
setTimeout(()=>{
	fun()
},3000)
setTimeout(()=>{
	fun()
},4000)
setTimeout(()=>{
	fun()
},7000)
 