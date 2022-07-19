// function* generatorExample() {
//   console.log('开始执行')
//   yield 'hello'
//   yield 'generator'
// }
// // generatorExample()
// // 这种调用方法Generator 函数并不会执行
// let MG = generatorExample() // 返回指针对象
// MG.next() //开始执行  {value: "hello", done: false}

// function* generation() {
//   yield 'first'
//   yield 'two'
// }

// let g = generation()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   setTimeout(() => {
//     console.log('timer')
//   }, 0)
//   console.log('async2')
// }
// async1()
// console.log('start')

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
//   setTimeout(() => {
//     console.log('timer1')
//   }, 0)
// }
// async function async2() {
//   setTimeout(() => {
//     console.log('timer2')
//   }, 0)
//   console.log('async2')
// }
// async1()
// setTimeout(() => {
//   console.log('timer3')
// }, 0)
// console.log('start')

// async function async1() {
//   console.log('async1 start')
//   await new Promise(resolve => {
//     console.log('promise1')
//   })
//   console.log('async1 success')
//   return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')

// async function async1() {
//   console.log('async1 start')
//   await new Promise(resolve => {
//     console.log('promise1')
//     resolve('promise1 resolve')
//   }).then(res => console.log(res))
//   console.log('async1 success')
//   return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')

async function async1() {
  console.log('async1 start')
  await new Promise(resolve => {
    console.log('promise1')
    resolve('promise resolve')
  })
  console.log('async1 success')
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => {
  console.log(res)
})
new Promise(resolve => {
  console.log('promise2')
  setTimeout(() => {
    console.log('timer')
  })
})
