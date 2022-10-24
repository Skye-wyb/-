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

// 缺点：无法继承父类原型链上的属性和方法
