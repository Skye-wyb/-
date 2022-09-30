// 适配器模式：旧接口格式和使用者不兼容，中间加一个适配转换接口。
// 比如国外的插座跟国内的插座不一样，我们需要买个转换器去兼容。

class Adaptee {
    specificRequest () {
        return '德国标准的插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request () {
        let info = this.adaptee.specificRequest()
        return `${info} -> 转换器 -> 中国标准的插头`
    }
}

let client = new Target()
let ans = client.request()
console.log(ans);