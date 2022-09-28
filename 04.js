let nums = [1, 2, 3, -1, 0, 0, 0, 4, 3, 4]
function sort (nums) {
    let len = nums.length
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            ans.push(nums[i])
        }
    }
    for (let i = ans.length; i < len; i++) {
        ans.push(0)
    }
    return ans
}
console.log(sort(nums));