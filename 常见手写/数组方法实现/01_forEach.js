/**
 * 
 * @param {* 遍历项} item 
 * @param {* 遍历项索引} index 
 * @param {* 数组本身} arr 
 */

Array.prototype._forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
array._forEach(function (item, index, arr) {
    console.log(index, item);
})