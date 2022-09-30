// 状态模式：一个对象有状态变化，每次状态变化都会触发一个逻辑，不能总是用if...else来控制。

// 红绿灯
class State {
    constructor(color) {
        this.color = color
    }
    // 设置状态
    handle (context) {
        console.log(`turn to ${this.color} light`);
        context.setState(this)
    }
}
// 主体
class Context {
    constructor() {
        this.state = null
    }
    // 获取状态
    getState () {
        return this.state
    }
    setState (state) {
        this.state = state
    }
}


let context = new Context();
let green = new State('green');
let yellow = new State('yellow');
let red = new State('red');

// 绿灯亮了
green.handle(context);
console.log(context.getState())

// 黄灯亮了
yellow.handle(context);
console.log(context.getState())

// 红灯亮了
red.handle(context);
console.log(context.getState())