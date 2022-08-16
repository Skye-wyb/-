async function test1() {
  return 1
}
async function test2() {
  return Promise.resolve(2)
}
const res1 = test1()
const res2 = test2()

console.log(res1)
console.log(res2)

async function test3() {
  const p3 = Promise.resolve(3)
  p3.then(value => {
    console.log('value:', value)
  })

  const data = await p3
  console.log('data:', data)
}
test3()

async function test4() {
  const data = await 4
  console.log('value4', data)
}
test4()

async function test5() {
  const data5 = await test1()
  console.log('value5', data5)
}
test5()

async function test6() {
  const p6 = Promise.reject(6)

  try {
    const data6 = await p6
    console.log('data6', data6)
  } catch (e) {
    console.log('error', e)
  }
}
test6()
