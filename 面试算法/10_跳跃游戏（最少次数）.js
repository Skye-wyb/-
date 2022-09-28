let jump = function (nums) {
    let res = 0, start = 0, end = 1
    while (end < nums.length) {
        let tempMax = 0
        for (let i = start; i < end; ++i) {
            tempMax = Math.max(i + nums[i], tempMax)
        }
        start = end
        end = tempMax + 1
        ++res
    }
    return res
}
let ans = jump([2, 3, 1, 1, 4])
console.log(ans);