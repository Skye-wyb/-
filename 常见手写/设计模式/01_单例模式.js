// 不管创建多少个对象都只有一个实例
// 单例：指的是创建的总是同一个实例，使用类创建的实例始终是相同的
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
