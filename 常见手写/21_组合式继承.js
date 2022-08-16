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

Student.prototype = new Person()
Student.prototype.constructor = Student

// 缺点：父类构造函数执行了2次，子类原型上有2份属性和方法