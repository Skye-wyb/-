let nums = [2, 2, 1, 1, 1, 2, 2]
let map = new Map()
for (let num of nums) {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1)
  } else {
    map.set(num, 1)
  }
}

let max = 0
let str
for (let [key, value] of map) {
  if (value > max) {
    max = value
    str = key
  }
}
console.log(str)
