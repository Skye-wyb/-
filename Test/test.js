
var canJump = function (nums) {
    let len = nums.length;
    let pos = undefined;
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] === 0 && pos === undefined)
            pos = i;
        if (pos !== undefined && i + nums[i] > pos)
            pos = undefined
    }
    return pos === undefined
};


let nums = [2, 3, 1, 1, 4]
console.log(canJump(nums));