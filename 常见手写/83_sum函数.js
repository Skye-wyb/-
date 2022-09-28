const sum = (...args) => {
  // 声明add函数，其实主要是缓存参数的作用
  // 注意add调用完成还是会返回add函数本身，使其可以链式调用
  const add = (...args2) => {
    args = [ ...args, ...args2 ]
    return add
  }
  // 求和计算
  add.valueOf = () => args.reduce((ret, num) => ret + num, 0)

  return add
}

// 测试
console.log(sum(1, 2, 3).valueOf()) // 6
console.log(sum(2, 3)(2).valueOf()) // 7
console.log(sum(1)(2)(3)(4).valueOf()) // 10
console.log(sum(2)(4, 1)(2).valueOf()) // 9