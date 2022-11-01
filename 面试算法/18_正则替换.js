let str = 'xiao-wang-xiao'
let reg = /\-(\w{1})/
while (reg.test(str)) {
    let s = reg.exec(str)[1]
    str = str.replace(reg, s.toUpperCase())
}
console.log(str);