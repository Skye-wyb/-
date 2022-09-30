// 装饰器模式：为对象添加新功能，不改变其原有的结构和功能
// 适配器模式是原有的不能用了，要重新封装接口。装饰器模式是原有的还能用，但是需要新增一些东西来完善这个功能。

class Circle {
    draw () {
        console.log('画一个圆形');
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw () {
        this.circle.draw()
        this.setRedBorder(this.circle)
    }
    setRedBorder (circle) {
        console.log('设置红色边框');
    }
}

let circle = new Circle()

let client = new Decorator(circle)
client.draw()