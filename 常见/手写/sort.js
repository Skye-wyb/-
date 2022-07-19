// function randomSort(arr) {
//   return arr.sort(() => Math.random() - 0.5)
// }

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]
for (let i = 0; i < arr.length; i++) {
  const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i
  let temp = arr[i]
  arr[i] = arr[randomIndex]
  arr[randomIndex] = temp
}
console.log(arr)
