// 实现一个基于 promise 的并发调度器
const request = createRequest({
  pool: 3
})

for (let i = 1; i <= 10; i++) {
  request('/user').then(console.log)
}
