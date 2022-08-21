let commonChars = function (words) {
  let parent = words.shift().split('')
  return parent.filter((e) => {
    let flag = words.every((word) => {
      return word.indexOf(e) > -1
    })
    if (flag) {
      words = words.map((word) => {
        return word.replace(e, '')
      })
    }
    return flag
  })
}
