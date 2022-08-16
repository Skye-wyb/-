function formatNumber(number){
	number = '' + number
	  // 获取整数位和小数位
	  const [integer, decimal = ''] = number.split('.')
	  return integer.replace(/(?=(\d{3})+$)/g, ',').substring(1) + (decimal ? '.' + decimal : '')
}
let num = 123456789.123
let ans = formatNumber(num)
console.log(ans);