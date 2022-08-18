function splitNumber(num){
	let [n,decimal=''] = String(num).split('.')
	n = n.replace(/(?=(\d{3})+$)/g,',')
	n = n.charAt(0)===',' ? n.substring(1) : n
	return n + (decimal ? '.' + decimal : '')
}
let num = 1234560.789
console.log(splitNumber(num));