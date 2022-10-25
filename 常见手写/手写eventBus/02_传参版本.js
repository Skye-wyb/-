// 使用$on订阅事件
// 使用$emit发布事件
// $emit发布事件可以传参

class EventBus {
    constructor() {
        this.events = {}
    }
    $on (event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }
    $emit (event, ...args) {
        const callbacks = this.events[event]
        callbacks.forEach(callback => {
            callback.apply(this, args)
        })
    }
}
let bus = new EventBus()
// 订阅事件
bus.$on('key1', () => {
    info('我是订阅事件A')
})
bus.$on('key1', (a, b, c) => {
    info('我是订阅事件B', a, b, c)
})
bus.$on('key2', () => {
    info('我是订阅事件C')
})
// 发布事件
bus.$emit('key1', '我是', '赵', '媛媛')
bus.$emit('key2')