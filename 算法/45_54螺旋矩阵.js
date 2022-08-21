/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) {
    return []
  }
  const ans = []
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      ans.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) {
      ans.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) {
      ans.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) {
      ans.push(matrix[i][left])
    }
    // 进入内层
    left++
    right--
    top++
    bottom--
  }
  if (top === bottom) {
    // 剩下一行
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i])
    }
  } else if (left == right) {
    // 剩下一列
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][left])
    }
  }
  return ans
}
