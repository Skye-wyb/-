// 1 简洁版
function pow (x, n) {
    return x ** n
}

console.log(pow(2, 10009) == Math.pow(2, 10009));

// 2 迭代版本
function _pow (x, n) {
    if (x === 1 || x === 0 || n === 1) {
        return x
    }
    if (n === 0) {
        return 1
    }

    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let [ans, res] = [1, x]
    for (let i = n; i > 0; i = i / 2) {
        // 与1按位与：结果为0则是偶数，结果为1则是奇数
        if ((i & 1) === 1) {
            ans *= res
        }
        res *= res
    }
    return ans
}
console.log(_pow(2, 10009) == Math.pow(2, 10009));