let rotate = function (matrix) {
  let len = matrix.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix.map((item) => item.reverse())
}

const rotate1 = function (matrix) {
  const n = matrix.length
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j]
    }
  }
}
