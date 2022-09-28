let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = (arr) => {
    let res = []
    res = arr.reduce((prev, cur) => {
        prev = prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
    return res
}

console.log(flatten(cur));