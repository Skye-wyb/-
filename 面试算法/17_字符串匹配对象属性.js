const obj = {
    b: '123',
    c: '456',
    d: {
        e: '110',
    },
}
const str1 = 'a{a.b}aa{a.c}aa{a.d.e}{a.f}aaaa{a.c}huhu{a.d.g}ppppp{a.b}ffff{a.d.e}'
// const str1 = '{a.b}'
function replaceStr (str, obj) {
    const reg = /\{([\w|.]+)\}/
    if (reg.test(str)) {
        let key = reg.exec(str)[1].split('.')
        let v = obj[key[1]]
        for (let i = 2; i < key.length; i++) {
            v = v[key[i]] || null
        }
        if (v) {
            str = str.replace(reg, v)
        } else {
            let [s, index] = [reg.exec(str)[1], reg.exec(str)['index']]
            return str.slice(0, index + s.length) + replaceStr(str.slice(index + s.length), obj)
        }
        return replaceStr(str, obj)
    }
    return str
}
console.log(replaceStr(str1, obj));