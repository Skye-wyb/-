function render(template, data){
	// 模板字符串正则
	var reg = /\$\{(\w+)\}/
	// 判断字符串是否存在占位符
	if(reg.test(template)){
		// 获取第一个占位符包含的变量名
		const expression = reg.exec(template)[1]
		// 替换
		template = template.replace(reg,data[expression])
		return render(template,data)
	}
	return template
}

let template = 'my name is ${name},age is ${age},hobby is ${hobby}'
let data = {
  name: 'wyb',
  age: 24,
  hobby: {
    name: '花瓣',
    grade: 1
  }
}
let ans = render(template, data)
console.log(ans)
// my name is wyb,age is 24,hobby is [object Object]