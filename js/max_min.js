function max_min(arr) {
  let max = Math.max.apply(null, arr)
  let min = Math.min.apply(null, arr)
  return [min, max]
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let [min, max] = max_min(arr)
console.log(min, max)
