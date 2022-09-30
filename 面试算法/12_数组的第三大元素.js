// 求一个数组第三大的数，若不足3个则返回第一大的
// let nums = [1, 1, 1, 2, 3, 4, 4, 5, 6]
// let res = nums.slice(0, 3).sort((a, b) => b - a)
// for (let i = 3; i < nums.length; i++) {
// 	if (nums[i] > res[0]) {
// 		res[0] = nums[i]
// 	} else if (nums[i] > res[1] || nums[i] > res[2]) {
// 		res[2] = nums[i]
// 	}
// 	res.sort((a, b) => a - b)
// }
// console.log(res);

let arr = [1, 1, 1, 1, 1, 21, 23, 100]
let res = [arr[0]], index = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === index || res.indexOf(arr[i]) > -1) {
        continue
    } else if (arr[i] < index) {
        if (arr[i] < res[res.length - 1]) {
            continue
        } else if (arr[i] > res[1]) {
            res.pop()
            res.splice(1, 0, arr[i])
        } else {
            res.pop()
            res.push(arr[i])
        }
    } else {
        if (res.length == 3) {
            res.pop()
        }
        res.unshift(arr[i])
    }
    index = res[0]
}
console.log(res);
if (res.length < 3) {
    console.log(res[0]);
} else {
    console.log(res[2]);
}