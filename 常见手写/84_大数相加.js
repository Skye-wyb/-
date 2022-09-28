// 转为字符串后相加
function add(n1,n2){
	let str1 = n1.split('')
	let str2 = n2.split('')
	let result = []
	let curry = 0
	while(str1.length || str2.length){
		let a = parseInt(str1.pop())||0
		let b = parseInt(str2.pop())||0
		let ans = a+b+curry
		result.unshift(ans%10)
		curry = Math.floor(ans/10)
	}
	if(curry){
		result.unshift(curry)
	}
	return result.join('')
}
console.log(add('123111111111111111111222222222','1232222222222222222222222222222222222'));