// rand7生成rand10
function rand10() {
  let x
  do {
    x = rand7() * 7 + rand7()
  } while (x >= 40)
  return x % 10
}
