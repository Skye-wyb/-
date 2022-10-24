function isSame (str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else {
            map.set(str[i], 1)
        }
    }
    let values = map.values()
    let ans = new Set(values)
    return ans.size === 1
}
console.log(isSame('aabbccddeeff'));