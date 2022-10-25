
class EventBus {
    // 定义所有事件列表,此时需要修改格式：
    // // {
    //   key: {
    //     id: Function,
    //     id: Function
    //   },
    //   key: Object,
    // } 
    // Array存储的是注册的回调函数
    constructor() {
        this.eventObj = {}; // 用于存储所有订阅事件
        this.callbcakId = 0; // 每个函数的ID
    }
    // 订阅事件,类似监听事件$on('key',()=>{ })
    $on (name, callbcak) {
        // 判断是否存储过
        if (!this.eventObj[name]) {
            this.eventObj[name] = {};
        }
        // 定义当前回调函数id
        const id = this.callbcakId++;
        this.eventObj[name][id] = callbcak; // 以键值对的形式存储回调函数
        return id; // 将id返回出去，可以利用该id取消订阅
    }
    // 发布事件,类似于触发事件$emit('key')
    $emit (name, ...args) {
        // 获取存储的事件回调函数数组
        const eventList = this.eventObj[name];
        // 执行所有回调函数且传入参数
        for (const id in eventList) {
            eventList[id](...args);
        }
    }
    // 取消订阅函数，类似于$off('key1', id)
    $off (name, id) {
        // 删除存储在事件列表中的该事件
        delete this.eventObj[name][id];
        console.info(`id为${id}的事件已被取消订阅`)
        // 如果这是最后一个订阅者，则删除整个对象
        if (!Object.keys(this.eventObj[name]).length) {
            delete this.eventObj[name];
        }
    }
}
// 初始化EventBus
let EB = new EventBus();


// 订阅事件
EB.$on('key1', (name, age) => {
    console.info("我是订阅事件A:", name, age);
})
let id = EB.$on("key1", (name, age) => {
    console.info("我是订阅事件B:", name, age);
})
EB.$on("key2", (name) => {
    console.info("我是订阅事件C:", name);
})


// 发布事件key1
EB.$emit('key1', "小猪课堂", 26);
// 取消订阅事件
EB.$off('key1', id);
// 发布事件key1
EB.$emit('key1', "小猪课堂", 26);
// 发布事件
EB.$emit('key2', "小猪课堂");
