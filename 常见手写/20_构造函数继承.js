function Person(name){
	this.name = name
}
Person.prototype.sayHi = function(){
	console.log('Hi');
	return this.name
}

function Student(){
	Person.apply(this,arguments)
}

// 无法继承父类原型上的属性和方法，实例的构造函数为Person