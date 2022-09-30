// 创建一个共享的原型，并通过拷贝这些原型创建新的对象
// 原型模式就是创建一个指定原型的对象。如果我们需要重复创建某个对象，那么就可以使用原型模式来实现。
// Object.create()

function F () { }
F.prototype.g = function () { }

// G类继承F类
function G () {
    F.call(this)
}

// 原型继承
function Fn () { }
Fn.prototype = F.prototype
G.prototype = new Fn()
G.prototype.constructor = G