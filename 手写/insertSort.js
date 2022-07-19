function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let pre = i - 1,
      cur = arr[i]
    while (pre >= 0 && cur < arr[pre]) {
      arr[pre + 1] = arr[pre]
      pre--
    }
    arr[pre + 1] = cur
  }
  return arr
}

let arr = [7, 4, 5, 3, 9, 8, 1, 0]
let ans = insertSort(arr)
console.log(ans)
