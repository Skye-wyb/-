let canJump = function (nums) {
    let len = nums.length
    let flag = undefined
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] === 0 && flag === undefined) {
            flag = i
        }
        if (flag !== undefined && i + nums[i] > flag) {
            flag = undefined
        }
    }
    return flag === undefined
}

// console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));