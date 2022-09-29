/**
 * 
 * @param {* 遍历项} item 
 * @param {* 遍历项索引} index 
 * @param {* 数组本身} arr 
 */

// 返回满足条件的第一个元素的索引，否则返回-1
Array.prototype._findIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i
        }
    }
    return -1
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._findIndex(function (item, index, arr) {
    return item == 8
})
console.log(ans);