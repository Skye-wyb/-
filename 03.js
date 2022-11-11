function fn (n) {
    let i = 0
    do {
        n = Math.floor(n / 10)
        i++
    } while (n != 0)
    return i
}
fn(12345)