function transform (text) {
    let map = {
        0: '零',
        1: '壹',
        2: '贰',
        3: '叁',
        4: '肆',
        5: '伍',
        6: '陆',
        7: '柒',
        8: '捌',
        9: '玖',
    }
    let obj = {
        1: '拾',
        2: '佰',
        3: '仟',
        4: '万',
        8: '亿',
        12: '兆'
    }
    let reg = /\为(\d{1,})\元/
    if (reg.test(text)) {
        let price = reg.exec(text)[0]
        price = price.substring(1, price.length - 1)
        console.log(price);
        let temp = trans(price, map, obj)
        text = text.replace(price + '元', temp + '圆')
        return transform(text)
    }
    return text
}
function trans (n, map, obj) {
    if (n == 0) {
        console.log('零');
        return '零'
    } else {
        let s = String(n).split('').reverse().join('')
        // console.log(s);
        let ans = ''
        for (let i = 0; i < s.length; i++) {
            let temp = obj[i] && s[i] != 0 ? obj[i] : i > 3 ? obj[i % 4] : ''
            let item = s[i] != 0 ? map[s[i]] : ''
            ans = item + temp + ans
        }
        return ans
    }
}
let text = '"本次采购的商品有110件"，采购的价格为0元的10件属于赠送商品，采购价格为9999元的100件是实际购买商品，本次采购总价为999900元。'
console.log(transform(text));

// console.log(trans(999900, {
//     0: '零',
//     1: '壹',
//     2: '贰',
//     3: '叁',
//     4: '肆',
//     5: '伍',
//     6: '陆',
//     7: '柒',
//     8: '捌',
//     9: '玖',
// }, {
//     1: '拾',
//     2: '佰',
//     3: '仟',
//     4: '万',
//     8: '亿',
//     12: '兆'
// }));