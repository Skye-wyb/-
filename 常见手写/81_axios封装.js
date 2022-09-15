// 封装axios的get、post方法
import axios from 'axios'

const service = axios.create({
	baseURL:'http://localhost:8080',
	timeout:5000,
	headers:{
		'content-type':'application/x-www-form-urlencoded'
	}
})

// 请求拦截
service.interceptors.request.use(config=>{
	
},err=>{
	return Promise.reject(err)
})
// 响应拦截
service.interceptors.response.use(response=>{
},err=>{
	
})

export default service