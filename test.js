let str = '1'
function longest(str) {
  if (!str.includes('0')) {
    return str.length
  }
  let temp = str + str
  let max = 0
  let arr = []
  for (let s of temp) {
    if (s !== '1') {
      arr = []
    } else {
      arr.push(s)
      max = Math.max(max, arr.length)
    }
  }
  return max
}
console.log(longest(str))
