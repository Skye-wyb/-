function leastInterval(tasks, n) {
  let arr = new Array(26).fill(0)
  for (let c of tasks) {
    // 统计各个字母出现的次数
    arr[c.charCodeAt() - 'A'.charCodeAt]++
  }
  let max = 0
  for (let i = 0; i < 26; i++) {
    // 找到最大次数
    max = Math.max(max, arr[i])
  }
  //   计算前n-1行n的间隔的时间大小
  let res = (max - 1) * (n + 1)
  for (let i = 0; i < 26; i++) {
    // 计算和最大次数相同的字母的个数，然后累加
    if (arr[i] === max) {
      res++
    }
  }
  return Math.max(res, tasks.length)
}
