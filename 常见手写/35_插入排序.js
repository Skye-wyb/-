function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let prev = i - 1,
      curNum = arr[i]
    while (prev >= 0 && arr[prev] > curNum) {
      arr[prev + 1] = arr[prev]
      prev--
    }
    arr[prev + 1] = curNum
  }
  return arr
}

let arr = [1, 2, 7, 8, 4, 3, 13, 23, 41, 0]
let ans = insertSort(arr)
console.log(ans)
