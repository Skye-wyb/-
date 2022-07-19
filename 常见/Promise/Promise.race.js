Promise.race = function (promises) {
  const length = promises.length
  return new Promise((resolve, reject) => {
    for (let i = 0; i < length; i++) {
      promises[i].then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
    }
  })
}
