/**
 * 
 * @param {* 分隔符，默认为,} s 
 */
// 将数组数组用分隔符拼为字符串，分隔符默认为,
Array.prototype._join = function (s = ',') {
    let str = ''
    for (let i = 0; i < this.length; i++) {
        if (i == 0) {
            str += this[i]
        } else {
            str += s + this[i]
        }
    }
    return str
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._join('|')
console.log(ans);