/**
 *
 * @param {* 起始索引} start
 * @param {* 删除个数} num
 * @param {* 新增或替换值} value
 */

// 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
Array.prototype._splice = function (start, length, ...values) {
    if (length === 0) return []
    length = start + length > this.length - 1 ? this.length - start : length
    console.log(length)
    const res = [], tempArr = [...this]
    for (let i = start; i < start + values.length; i++) {
        this[i] = values[i - start]
    }
    this.length = start + values.length
    if (values.length < length) {
        const cha = length - values.length
        console.log(cha)
        for (let i = start + values.length; i < tempArr.length; i++) {
            this[i] = tempArr[i + cha]
        }
        this.length = this.length - cha
    }
    if (values.length > length) {
        for (let i = start + length; i < tempArr.length; i++) {
            this.push(tempArr[i])
        }
    }
    for (let i = start; i < start + length; i++) {
        res.push(tempArr[i])
    }
    return res
}
