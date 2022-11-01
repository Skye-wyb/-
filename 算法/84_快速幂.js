const pow = function (a, b) {
    if (b === 0) return 1
    else if (b % 2 == 1) {
        return a * pow(a, b - 1)
    } else {
        let res = pow(a, b / 2)
        return res * res
    }
}
console.log(pow(2, 4));