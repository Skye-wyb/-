Array.prototype._indexOf = function (item) {
    let arr = this
    let map = {}
    arr.forEach((cur, i) => {
        map[typeof cur + JSON.stringify(cur)] != undefined ? '' : map[typeof cur + JSON.stringify(cur)] = i
    })
    if (map.hasOwnProperty(typeof item + JSON.stringify(item))) {
        return map[typeof item + JSON.stringify(item)]
    }
    return -1
}

let nums = [{ name: 1 }, [1, 2, 3, 4, 5], NaN, 12, 3, 4, 'popop', { name: 1 }]
console.log(nums._indexOf({ name: 1 }));
console.log(nums._indexOf([1, 2, 3, 4, 5]));
console.log(nums._indexOf(NaN));
console.log(nums._indexOf(12));