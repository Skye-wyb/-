const target = new Date('2020-01-10')

const proxy = new Proxy(target, {
    get (target, key) {
        if (key === 'getDate') {
            return new Date().getDate()
        }
        return target[key]
    }
})
console.log(proxy.getDate);