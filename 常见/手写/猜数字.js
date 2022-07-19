function guessNum(n) {
  const rec = function (low, high) {
    let mid = Math.floor((low + high) / 2)
    let res = guess(mid)
    if (res === 0) {
      return mid
    } else if (res === -1) {
      return rec(low, mid - 1)
    } else {
      return rec(mid + 1, high)
    }
  }
  return rec(1, n)
}
