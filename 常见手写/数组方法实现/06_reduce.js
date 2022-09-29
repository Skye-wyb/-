/**
 * 
 * @param {* 上一次调用返回的累计值} prev 
 * @param {* 当前项} cur 
 * @param {* 当前项索引} index 
 * @param {* 数组本身} arr 
 * @param {* 初始值} initialValue
 */

Array.prototype._reduce = function (callback, ...initialValue) {
    let start = 0, prev
    if (initialValue.length) {
        prev = initialValue[0]
    } else {
        prev = this[0]
        start = 1
    }
    for (let i = start; i < this.length; i++) {
        prev = callback(prev, this[i], i, this)
    }
    return prev
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._reduce((prev, cur, index, arr) => {
    return prev + cur
}, 10)
console.log(ans);