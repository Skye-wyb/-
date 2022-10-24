function Parent (name) {
    this.name = name
    this.sayHi = function () {
        console.log('Hi');
    }
}

function Son (name) {
    Parent.call(this, name)
}

function content()
Son.prototype = Parent.prototype
Son.prototype.constructor = Son