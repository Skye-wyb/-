// 原型链继承+构造函数继承
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

Son.prototype = new Parent()
Son.prototype.constructor = Son


// 缺点：父类构造函数执行了两次