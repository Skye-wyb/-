let str = 'aphkvcdbe   POBHACS'
function sortStr(str){
	let ans  = str.split('').map(item=>item.toLowerCase()).sort((a,b)=>{
		if(a<b){
			return -1
		}else if(a==b){
			return 0
		}else{
			return 1
		}
	})
	ans = new Set(ans)
	return [...ans].join('')
}
let ans = sortStr(str)
console.log(ans);