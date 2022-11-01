// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

var findPeakElement = function (nums) {
    if (nums.length == 1) return 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 && nums[i] > nums[i + 1]) {
            return i
        } else if (i == nums.length - 1 && nums[i] > nums[i - 1]) {
            return i
        } else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i
        }
    }
}