Array.prototype.reduce1 = function(callback,initValue){
	if(typeof callback !== 'function'){
		throw `${callback} is not a function`
	}
	let prev = initValue
	let i = 0
	const length = this.length
	if(typeof prev === 'undefined'){
		prev = this[0]
		i=1
	}
	while(i<length){
		if(i in this){
			prev = callback(prev,this[i],i,this)
		}
		i++
	}
	return prev
}

let arr = [1,2,3,4,5,6]
console.log(arr.reduce1((prev,item)=>prev+item,0));