function total(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur
  }, 0)
}

function maxMount(order, ans) {
  let res = []
  for (let i = 0; i < order.length; i++) {
    let left = ans.slice(0, order[i] - 1)
    let right = ans.slice(order[i])
    ans[order[i] - 1] = 0
    let temp = Math.max(total(left), total(right))
    res.push(temp)
  }
  return res
}

let ans = [2, 5, 3, 1, 4, 3]
let order = [5, 3, 4, 1, 2, 6]
let res = maxMount(order, ans)
console.log(res)
