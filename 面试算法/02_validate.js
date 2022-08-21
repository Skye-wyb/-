//'[]'必须匹配，可以存在多对，不能存在多余的'['或者']',但中间可以有其他字符
function validate(str) {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      stack.push(str[i])
    } else if (str[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(validate('[]')) //true
console.log(validate('[a]')) //true
console.log(validate('[')) //false
console.log(validate(']')) //false
console.log(validate('[[a]]')) //true
