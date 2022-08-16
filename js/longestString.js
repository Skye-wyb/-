function lengthOfLongestSubstring(s){
	let ans = []
	let max = 0
	let res = ''
	for(let str of s){
		while(ans.includes(str)){
			ans.shift()
		}
		ans.push(str)
		res = max>ans.length?res:ans.join('')
		max = Math.max(max,ans.length)
	}
	return [res,max]
}

let str = 'abcdefghhhhhhaabcdefggggjio'
console.log(lengthOfLongestSubstring(str));