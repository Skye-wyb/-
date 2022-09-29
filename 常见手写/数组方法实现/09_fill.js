/**
 * 
 * @param {* 填充值} value
 * @param {* 起始索引} start
 * @param {* 结束索引} end
 */

const e = require("express")

// 用一个固定值填充一个数组从起始索引到结束索引内的全部元素，不包括结束索引
Array.prototype._fill = function (value, start = 0, end) {
    end = end || this.length
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._fill(0, 2, 4)
console.log(ans);