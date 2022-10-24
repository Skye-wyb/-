function Parent (name) {
    this.name = name
    this.sayHi = function () {
        console.log('Hi');
    }
}

function Son (name, age) {
    Parent.call(this, name)
    this.age = age
}

Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son

