function indexOf(arr, val) {
  if (!Array.isArray(arr)) return
  let length = arr.length
  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}
