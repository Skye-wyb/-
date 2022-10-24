function content (obj) {
    function F () { }
    F.prototype = obj
    return new F()
}
function Son (obj) {
    let sub = content(obj)
    sub.getAge = function () {
        console.log('age');
    }
    return sub
}
function Parent (name) {
    this.name = name
    this.sayHi = function () {
        console.log('Hi');
    }
}

let par = new Parent()
let sub = Son(par)
sub.sayHi()