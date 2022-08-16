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

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student