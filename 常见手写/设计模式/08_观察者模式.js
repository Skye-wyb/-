// 使用观察者模式的好处：
/**
 * 支持简单的广播通信，自动通知所有已经订阅过的对象。
 * 目标对象与观察者存在的是动态关联，增加了灵活性。
 * 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。
 */

let events = (function () {
    let topics = {}
    return {
        // 订阅
        subscribe: function (topic, handler) {
            if (!topics.hasOwnProperty(topic)) {
                topics[topic] = []
            }
            topics[topic].push(handler)
        },
        // 发布
        publish: function (topic, info) {
            if (topics.hasOwnProperty(topic)) {
                topics[topic].forEach(handler => {
                    handler(info)
                })
            }
        },
        // 移除
        remove: function (topic, handler) {
            if (!topics.hasOwnProperty(topic)) return
            let handlerIndex = -1
            topics[topic].forEach((item, index) => {
                if (item === handler) {
                    handlerIndex = index
                }
            })
            if (handlerIndex > -1) {
                topics[topic].splice(handlerIndex, 1)
            }
        },
        // 移除所有
        removeAll: function (topic) {
            if (topics.hasOwnProperty(topic)) {
                topics[topic] = []
            }
        }
    }
})()