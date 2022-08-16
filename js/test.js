Promise.myAllSettled = function (PromiseArr) {
  return new Promise(res => {
    let promiseResult = []
    PromiseArr.forEach(item => {
      Promise.resolve(item)
        .then(value => {
          promiseResult.push({
            status: 'fulfilled',
            value
          })
        })
        .catch(reason => {
          promiseResult.push({
            statue: 'rejected',
            reason
          })
        })
    })
    res(promiseResult)
  })
}
// 测试一下
const p1 = Promise.resolve(1)
const p2 = new Promise(resolve => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise(resolve => {
  setTimeout(() => resolve(3), 3000)
})

const p11 = Promise.myAllSettled([p1, p2, p3]).then(res =>
  console.log(JSON.stringify(res, null, 2))
)
