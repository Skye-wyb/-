// 经过n次旋转相等
let rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal)
}

let rotateString = function (s, goal) {
  if (s === '' && goal === '') {
    return true
  }
  let len = s.length - 1
  while (len > 0) {
    let s1 = s.slice(0, 1)
    let s2 = s.slice(1)
    s = s1 + s2
    if (s === goal) {
      return true
    }
    len--
  }
  return false
}
