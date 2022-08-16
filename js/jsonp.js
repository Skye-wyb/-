function jsonp(url, params, callback) {
  // 判断有无参数
  let queryString = url.indexOf('?') === '-1' ? '?' : '&'
  //   添加参数
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      queryString += key + '=' + params[key] + '&'
    }
  }
  //   处理回调
  let random = Math.random().toString().replace('.', '')
  callbackName = 'myJsonp' + random
  //   添加回调
  queryString += 'callback=' + callbackName
  //   构建请求
  let scriptNode = document.createElement('script')
  scriptNode.src = url + queryString
  window[callbackName] = function () {
    // 调用回调
    callback(...arguments)
    // 删除脚本引用
    document.getElementsByTagName('head')[0].removeChild(scriptNode)
  }
  //   发送请求
  document.getElementsByTagName('head')[0].appendChild(scriptNode)
}
