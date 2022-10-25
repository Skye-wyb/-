// 使用$on订阅事件

const { info } = require("console")

// 使用$emit发布事件
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
    $emit (event) {
        const callbacks = this.events[event]
        callbacks.forEach(callback => {
            callback()
        })
    }
}
let bus = new EventBus()
// 订阅事件
bus.$on('key1', () => {
    info('我是订阅事件A')
})
bus.$on('key1', () => {
    info('我是订阅事件B')
})
bus.$on('key2', () => {
    info('我是订阅事件C')
})
// 发布事件
bus.$emit('key1')
bus.$emit('key2')