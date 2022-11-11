let commonChars = function (words) {
  let parent = words.shift().split('')
  return parent.filter((e) => {
    let flag = words.every((word) => {
      return word.indexOf(e) > -1
    })
    // 重复字符
    if (flag) {
      words = words.map((word) => {
        return word.replace(e, '')
      })
    }
    return flag
  })
}

// 输入：words = ["bella", "label", "roller"]
// 输出：["e", "l", "l"]
let words = ["bella", "label", "roller"]
console.log(commonChars(words));