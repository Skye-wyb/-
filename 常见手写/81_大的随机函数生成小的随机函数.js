// 利用等概率Rand5产生等概率Rand3
function rand3() {
  let x
  do {
    x = rand5()
  } while (x >= 3)
  return x
}
