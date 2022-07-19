function dateFormat(dateInput, format) {
  var day = dateInput.getDate()
  var month = dateInput.getMonth() + 1
  var year = dateInput.getFullYear()
  format = format.replace(/yyyy/, year)
  format = format.replace(/MM/, month)
  format = format.replace(/dd/, day)
  return format
}

let format = dateFormat(new Date(), 'yyyy年MM月dd日')
console.log(format)
