class Person{
	constructor(name){
		this.name = name
	}
	sayHi(){
		console.log(`Hi my name is ${name}`);
	}
}

class Student extends Person{	
	
}

let stu = new Student('网易')
console.log(stu.name);