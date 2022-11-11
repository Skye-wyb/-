// 输入：nums = [2, 3, 1, 1, 4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 能否从第一步跳到最后一步


var canJump = function (nums) {
    let len = nums.length
    let flag = undefined
    for (let i = len - 2; i >= 0; i++) {
        if (nums[i] == 0 && flag == undefined) {
            flag = i
        }
        if (flag != undefined && i + nums[i] > flag) {
            flag = undefined
        }
    }
    return flag == undefined
}

let nums = [2, 3, 1, 1, 4]
console.log(canJump(nums));