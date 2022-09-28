// 新建一个http.js来配置axios拦截器，统一处理所有http请求和响应，就得用上 axios 的拦截器。
// 通过配置http resquest interceptors为http头增加Authorization字段，其内容为Token;
// 通过配置http response interceptors，当后端接口返回401 Unauthorized（未授权），让用户重新登录。

import axios from 'axios'

const http = axios.create()

// http request拦截器
// 每次请求都为http头增加Authorization字段，其内容为Token
http.interceptors.request.use(
	config =>{
		const token = localStorage.getItem('token')
		if(token){
			config.headers.common['Authorization'] = token
		}
		return config
	},
	error=>{
		return Promise.reject(error)
	}
)

// http response拦截器
http.interceptors.response.use(response=>{
	let data = response.data
	if(data.code === 200){
		return data.data
	}
	if(data.code === 401){
		// 未授权
		window.location.href = '/login'
	}
	return Promise.resolve(data)
},error=>{
	return Promise.reject(error)
})

export default http

// 至此，就实现了拦截，只需要在登录那边设置Token并存进localStorage里便好。