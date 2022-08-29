let [n, m] = [4, 3]
let nums = [2, 3, 5, 4]
for (let j = 0; j < m; j++) {
  let temp = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      temp[i - 1 < 0 ? n - 1 : i - 1] += nums[i] / 2
      temp[i + 1 >= n ? 0 : i + 1] += nums[i] / 2
    } else {
      temp[i - 1 < 0 ? n - 1 : i - 1] += (nums[i] - 1) / 2
      temp[i + 1 >= n ? 0 : i + 1] += (nums[i] - 1) / 2
      temp[i] += 1
    }
  }
  nums = [...temp]
}
console.log(nums)
