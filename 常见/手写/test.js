function Person (name) {
    this.name = name
}
Person.prototype.sayHi = function () {
    console.log('Hi');
    return this.name
}

function Student () { }

Student.prototype = new Person('网易')
Student.prototype.constructor = Student