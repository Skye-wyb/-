function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  const merge = (leftArr, rightArr) => {
    let resultArr = []
    while (leftArr.length && rightArr.length) {
      resultArr.push(
        leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift()
      )
    }
    return resultArr.concat(leftArr).concat(rightArr)
  }
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

let arr = [7, 4, 5, 3, 9, 8, 1, 0]
let ans = mergeSort(arr)
console.log(ans)
