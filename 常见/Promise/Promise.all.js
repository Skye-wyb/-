Promise.all = function (promises) {
  let count = 0
  let res = []
  const length = promises.length
  return new Promise((resolve, reject) => {
    for (let i = 0; i < length; i++) {
      promises[i].then(
        val => {
          count++
          res[i] = val
          if (count === length) {
            resolve(res)
          }
        },
        err => {
          reject(err)
        }
      )
    }
  })
}
