String.prototype.trim = function () {
  let str = this
  // 正则表达式匹配
  return str.replace(/^\s*|\s*$/g, '')
}

let str = '        this              '
let ans = str.trim()
console.log(ans + '|')
