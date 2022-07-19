let p = new Promise((resolved, rejected) => {
  console.log('starting~~~')
  //   resolved(1)
  rejected(999)
  console.log('ending~~~')
})
  .then(
    res => {
      console.log(res)
    },
    err => {
      console.error('错误啦~', err)
    }
  )
  .finally(res => console.log(res, 'finally'))
