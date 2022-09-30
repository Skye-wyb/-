// 代理模式：使用者无权访问目标对象，中间加代理，通过代理做授权和控制。


/**
 * pre:代理模式
 * 小明追求A，B是A的好朋友,小明比不知道A什么时候心情好，不好意思直接将花交给A，
 * 于是小明将花交给B，再由B交给A.
 */

// 花的类
class Flower {
    constructor(name) {
        this.name = name
    }
}

// 小明拥有sendFlower的方法
let Xm = {
    sendFlower (target) {
        let flower = new Flower('丁香')
        target.receive(flower)
    }
}
// B对象拥有接收花的方法，同时接受花之后，监听A的心情，并且传入A心情好的时候的函数
let B = {
    receive (flower) {
        this.flower = flower
        A.listenMood(() => {
            A.receive(this.flower)
        })
    }
}
// A接收到花之后输出花的名字
let A = {
    receive (flower) {
        console.log(`A收到了${flower.name}`);
    },
    listenMood (func) {
        setTimeout(func, 1000)
    }
}
Xm.sendFlower(B)