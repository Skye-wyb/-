// [1,2,2,1]和[2,2]

function andArr(arr1, arr2) {
  return arr1.filter((item) => {
    return arr2.includes(item)
  })
}
let arr1 = [1, 2, 2, 1],
  arr2 = [2, 2]
let ans = andArr(arr1, arr2)
console.log(ans)
