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
