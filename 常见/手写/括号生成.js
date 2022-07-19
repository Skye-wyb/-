var generateParenthesis = function (n) {
  var res = new Set()
  //n代表'('的剩余数量，m代表')'的可使用数量，s表示已选择的字符串
  function dfs(n, m, s) {
    if (n == 0) {
      s += ')'.repeat(m)
      res.add(s)
      return
    }
    m += 1
    var temp = '('
    for (var i = 0; i <= m; i++) {
      dfs(n - 1, m - i, s + temp)
      temp += ')'
    }
  }
  if (n != 0) dfs(n, 0, '')
  return Array.from(res)
}

const generateParenthesis = n => {
  const res = [] // 输出的结果数组

  const generate = (str, left, right) => {
    if (str.length == 2 * n) {
      // 字符串构建完成
      res.push(str) // 将字符串加入res
      return // 结束当前递归（结束当前搜索分支）
    }
    if (left > 0) {
      // 只要左括号有剩，可以选它，继续递归做选择
      generate(str + '(', left - 1, right)
    }
    if (right > left) {
      // 右括号的保有数量大于左括号的保有数量，才能选右括号
      generate(str + ')', left, right - 1)
    }
  }

  generate('', n, n) // 递归的入口，初始字符串是空字符串，初始括号数量都是n
  return res
}
