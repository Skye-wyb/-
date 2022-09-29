/**
 * 
 * @param {* 目标元素} value
 * @param {* 起始索引} start
 */

// 查找元素，找到则返回true，否则返回false，可查找NaN
Array.prototype._includes = function (value, start = 0) {
    if (start < 0) {
        start = this.length + start
    }
    const isNaN = Number.isNaN(value)
    for (let i = start; i < this.length; i++) {
        if (this[i] === value || isNaN && Number.isNaN(this[i])) {
            return true
        }
    }
    return false
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._includes(6)
console.log(ans);