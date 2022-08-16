function compose(...fns){
	if(!fns.length){
		throw new TypeError('必须传入函数类型参数')
	}
	for(let fn of fns){
		if(typeof fn !== 'function'){
			throw new TypeError('必须传入函数类型')
		}
	}
	
	return function(...args){
		let index = 0
		let res = fns[index].apply(this,args)
		while(++index < fns.length){
			res = fns[index].call(this,res)
		}
		return res
	}
}

function add(num1, num2) {
  return num1 + num2
}
function double(num) {
  return num * 2
}
function square(num) {
  return num ** 2
}

const newFn = compose(add, double, square)
const res = newFn.call('call', 10, 20)
console.log(res);