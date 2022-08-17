function concatArr(arr1, arr2) {
  let arr = [...arr1]
  let curIndex = 0
  for (let i = 0; i < arr2.length; i++) {
    let reg = new RegExp(arr2[i])
    while (curIndex < arr.length) {
      ++curIndex
      if (!reg.test(arr[curIndex])) {
        arr.splice(curIndex, 0, arr2[i])
        break
      }
    }
  }
  return arr
}

let arr1 = [
  'A1',
  'A2',
  'A3',
  'B1',
  'B2',
  'B3',
  'C1',
  'C2',
  'C3',
  'D1',
  'D2',
  'D3',
]
let arr2 = ['A', 'B', 'C', 'D']
let ans = concatArr(arr1, arr2)
console.log(ans)
