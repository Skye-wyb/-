/**
 *
 * @param {* 深度，默认值为1} n
 */
// 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
Array.prototype._flat = function (n = 1) {
    let arr = this
    let deep = 0
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
        deep++
        if (deep >= n) break
    }
    return arr
}


let array = [1, [2, 3, [4, 5, ['a', 'b', ['c', 'd']]]], 7, 8, [9, 10]]
let ans = array._flat(4)
console.log(ans);