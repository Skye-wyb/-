// {1:222,2:123,5:888}
// [222,123,null,null,888,null,null,null,null,null,null,null]
let obj = { 1: 222, 2: 123, 5: 888 }
const result = Array.from({ length: 12 }).map(
  (item, index) => obj[index + 1] || null
)
console.log(result)
