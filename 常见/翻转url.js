// 'www.baidu.toutiao.com'转换成'com.toutiao.baidu.www'，不能使用split、join

let str = 'www.baidu.toutiao.com'
// let ans = []
// let start = 0
// for(let i=0;i<str.length;i++){
// 	if(str[i] === '.' || i === str.length-1){
// 		ans.push(i === str.length-1 ? str.substring(start, i+1) : str.substring(start,i))
// 		start = i + 1
// 	}
// }
// ans = ans.reverse()
// let res = ''
// for(let i=0;i<ans.length;i++){
// 	res += ans[i] + (i === ans.length-1 ? '' : '.')
// }
// console.log(res);
let reg = new RegExp(/\./)
function test(str){
	if(reg.test(str)){
		console.log(reg.exec(str));
	}
}
test(str)