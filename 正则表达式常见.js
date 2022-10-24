// 1、匹配16进制颜色值
var color = /^\#(\w{6}$|^\w{3}$)/g

let color1 = '#FFFFFF'
console.log(color.test(color1));

// 2、匹配日期
let date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g
let date1 = '2022:10:18'
console.log(date.test(date1));

// 3、匹配QQ号
let qq = /^[1-9][0-9]{4,10}$/g
let qq1 = '1986584871'
console.log(qq.test(qq1));

// 4、匹配手机号
let phone = /^1[34578]\d{9}$/g
let phone1 = '18613241883'
console.log(phone.test(phone1));

// 5、用户名正则
let user = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/g