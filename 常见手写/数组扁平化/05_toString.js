let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

let ans = arr.toString().split(',').map(Number)
console.log(ans);