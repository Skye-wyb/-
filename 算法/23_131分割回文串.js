function isPail(s,l,r){
	while(l<r){
		if(s[l]!==s[r]){
			return false
		}
		l++
		r--
	}
	return true
}

let partition = function(s){
	let ans = []
	function dfs(temp,start){
		if(start === s.length){
			ans.push([...temp])
			return
		}
		for(let i=start;i<s.length;i++){
			if(isPail(s,start,i)){
				temp.push(s.substring(start,i+1))
				dfs(temp,i+1)
				temp.pop()
			}
		}
	}
	dfs([],0)
	return ans
}