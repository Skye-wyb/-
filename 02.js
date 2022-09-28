
let person = {
    name: 'asd'
}
let p = new Proxy(person, {
    get (target, key) {
        if (key === 'name') {
            return target[key]
        }
        if (key === 'age') {
            throw 'error'
        }
    }
})

console.log(p['name']);
console.log(p['age']);