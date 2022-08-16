function Person(name){
	this.name = name
}
Person.prototype.sayHi = function(){
	console.log('Hi');
	return this.name
}

function Student(){}

// 子类原型对象指向父类实例
Student.prototype = new Person('网易')
Student.prototype.constructor = Student

// 所有的student实例原型指向同一个Person实例，则对某个Student实例的来自父类的引用类型变量修改会影响所有的Student实例
// 创建子类实例无法传参，即未实现super()