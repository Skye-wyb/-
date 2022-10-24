function shuffle1 (arr) {
    return arr.sort(() => Math.random() - 0.5)
}

// 随机拿一个元素并在原数组删除，加入新数组中
function shuffle2 (arr) {
    let newArr = []
    while (arr.length) {
        let index = parseInt(Math.random() * arr.length)
        newArr.push(arr[index])
        arr.splice(index, 1)
    }
    return newArr
}

// 随机取一个放在最后
function shuffle3 (arr) {
    let last = arr.length - 1
    for (let i = 0; i < last; i++) {
        let index = parseInt(Math.random() * (last + 1 - i))
        [arr[index], arr[last - i]] = [arr[last - i], arr[index]]
    }
    return arr
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(shuffle1(arr));
console.log(shuffle2(arr));
console.log(shuffle3(arr));