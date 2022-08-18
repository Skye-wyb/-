// 不管创建多少个对象都只有一个实例
let Single = (function(){
	let instance = null
	function Single(name){
		this.name = name
	}
	return function(name){
		if(!instance){
			instance = new Single(name)
		}
		return instance
	}
})()

let oa = new Single('hi')
let ob = new Single('hello')
console.log(oa);
console.log(ob);
console.log(oa===ob);
