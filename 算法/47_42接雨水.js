let trap = function (height) {
  if (height.length == 0) {
    return 0
  }
  let res = 0
  // 遍历每一根柱子
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0,
      rightMax = 0
    // 当前柱子左侧最大高度
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j])
    }
    // 当前柱子右侧最大高度
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j])
    }
    res += Math.min(leftMax, rightMax) - height[i]
  }
  return res
}
