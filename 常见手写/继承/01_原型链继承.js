function Parent (name) {
    this.name = name
    this.sayHi = function () {
        console.log('Hi');
    }
}

function Son () {

}
Son.prototype = new Parent('赵子绮')
Son.prototype.constructor = Son

let s = new Son()
console.log(s.name);