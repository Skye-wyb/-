// 代替new创建一个对象，且这个对象像工厂制作一样，批量制作属性相同的实例对象（指向不同）
function Animal(o){
	let instance = new Object()
	instance.name = o.name
	instance.age = o.age
	instance.getAnimal = function(){
		return 'name:'+instance.name+'age:'+instance.age
	}
	return instance
}

let cat = Animal({name:'cat',age:3})
console.log(cat);