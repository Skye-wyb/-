var combinationSum = function (candidates, target) {
  const ret = []

  const dfs = (start, arr, sum) => {
    if (sum === target) {
      ret.push(arr)
      return
    }
    if (sum > target) return

    for (let i = start; i < candidates.length; i++) {
      // 因为允许重复取，所以每一次都是从 start 这个节点开始取的
      dfs(i, [...arr, candidates[i]], sum + candidates[i])
    }
  }

  dfs(0, [], 0)
  return ret
}
let candidates = [2, 3, 6, 7],
  target = 7
let ans = combinationSum(candidates, target)
console.log(ans)
