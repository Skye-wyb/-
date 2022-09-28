// 输入: nums = [2, 3, 1, 1, 4]
// 从第一个跳跃到最后一个最小的跳跃次数
// 输出: 2

let jump = function (nums) {
    let res = 0, start = 0, end = 1
    while (end < nums.length) {
        let tempMax = 0
        for (let i = start; i < end; i++) {
            tempMax = Math.max(tempMax, i + nums[i])
        }
        start = end
        end = tempMax + 1
        ++res
    }
    return res
}

let nums = [2, 3, 1, 1, 4]
console.log(jump(nums));