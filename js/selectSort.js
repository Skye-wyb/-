function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        ;[arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

let arr = [7, 4, 5, 3, 9, 8, 1, 0]
let ans = selectSort(arr)
console.log(ans)
