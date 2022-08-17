function add(a,b){
	console.log('function add calling......');
	return a+b
}

function memorize(fn){
	const dep = {}
	return function(...rest){
		const key = rest.join('|')
		dep[key] || (dep[key] = fn(...rest))
		return dep[key]
	}
}

const mAdd = memorize(add)

console.log(mAdd(1, 2))
console.log(mAdd(1, 2))
console.log(mAdd(2, 3))
console.log(mAdd(2, 3))