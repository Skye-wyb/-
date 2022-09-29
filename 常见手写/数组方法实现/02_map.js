/**
 * 
 * @param {* 遍历项} item 
 * @param {* 遍历项索引} index 
 * @param {* 数组本身} arr 
 */

Array.prototype._map = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._map(function (item, index, arr) {
    return item + 1
})
console.log(ans);