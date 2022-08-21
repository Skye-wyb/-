let maxProfit = function (prices) {
  let n = prices.length
  let maxPrice = prices[n - 1]
  let result = 0
  for (let i = n - 1; i >= 0; i--) {
    if (maxPrice > prices[i]) {
      result = Math.max(result, maxPrice - prices)
    } else {
      maxPrice = prices[i]
    }
  }
  return result
}

let maxProfit1 = function (prices) {
  let maxPro = 0
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > maxPro) {
      maxPro = prices[i] - min
    }
  }
  return maxPro
}
