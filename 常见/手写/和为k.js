var subarraySum = function (nums, k) {
  let res = 0
  let map = new Map()
  //   保存当前位置的前缀和
  let sum = 0
  //   前缀和存储到map
  map.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    // 跳过第一个已经处理了的前缀和
    if (i != 0) {
      sum += nums[i - 1]
      map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
    }
    res += map.has(sum + nums[i] - k) ? map.get(sum + nums[i] - k) : 0
  }
  return res
}
