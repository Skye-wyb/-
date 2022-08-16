function mostNumber(n,arr){
	for(let i=0;i<n;i++){
		let [a,b] = arr[i]
		console.log(calGift(a,b));
	}
}
function calGift(a,b){
	return Math.min(a,b,(a+b)/3)
}

let n = 2
let arr = [[44,85],[9,49]]
mostNumber(n,arr)