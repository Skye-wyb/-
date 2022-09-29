/**
 * 
 * @param {* 遍历项} item 
 * @param {* 遍历项索引} index 
 * @param {* 数组本身} arr 
 */

Array.prototype._filter = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) && result.push(this[i])
    }
    return result
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._filter(function (item, index, arr) {
    return item > 3
})
console.log(ans);