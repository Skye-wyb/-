import axios from 'axios'

let instance = axios.create({
	baseURL:'https://localhost:3000/',
	headers:{
		'content-type':'application/x-www-form-urlencoded'
	}
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求之前做些什么
    return config
  },
  err => {
    // 对错误请求做些什么
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据进行处理
    return response
  },
  err => {
    // 响应错误的处理
    return Promise.reject(err)
  }
)
export default instance