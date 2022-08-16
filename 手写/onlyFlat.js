function flat(arr) {
  if (!Array.isArray(arr)) return
  let ans = []
  ans = arr.reduce((prev, item) => {
    return prev.concat(Array.isArray(item) ? flat(item) : item)
  }, [])
  ans = [...new Set(ans)]
  return ans
}

let arr = [1, [2, 3], [[4], [4, [4, 5]]]]
console.log(flat(arr))

function flat(arr) {
  if (!Array.isArray(arr)) return
  let ans = []
  ans = arr.reduce((prev, item) => {
    return prev.concat(Array.isArray(item) ? flat(item) : item)
  }, [])
  ans = [...new Set(ans)]
  return ans
}
/**
 * DNS域名解析
 * 建立TCP连接
 * 发送HTTP请求
 * 服务器处理请求
 * 返回响应结果
 * 关闭TCP连接
 * 浏览器解析HTML
 * 浏览器布局渲染
 * 
 */
