/**
 * 
 * @param {* 遍历项} item 
 * @param {* 遍历项索引} index 
 * @param {* 数组本身} arr 
 */

Array.prototype._some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true
        }
    }
    return false
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._some(function (item, index, arr) {
    return item > 7
})
console.log(ans);