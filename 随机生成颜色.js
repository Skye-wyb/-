// 实现一个函数，随机生成颜色，格式为 #000000

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
}
console.log(randomColor())
console.log(randomColor())
console.log(randomColor())
console.log(randomColor())
console.log(randomColor())
console.log(randomColor())

// 随机颜色rgb格式
function randomColorRGB() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

console.log(randomColorRGB())
console.log(randomColorRGB())
console.log(randomColorRGB())
console.log(randomColorRGB())
console.log(randomColorRGB())

// 随机颜色rgba格式
function randomColorRGBA() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let a = Math.random().toFixed(1)
  return `rgb(${r},${g},${b},${a})`
}

console.log(randomColorRGBA())
console.log(randomColorRGBA())
console.log(randomColorRGBA())
console.log(randomColorRGBA())
