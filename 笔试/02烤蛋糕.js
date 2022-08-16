let n,m,min,max
let arr = []
function canDo(n,m,min,max,arr){
	if(n-m<2){
		if(n-m===1 && (arr.includes(min) || arr.includes(max))){
			return true
		}
		if(n-m===0 && (arr.includes(min) && arr.includes(max))){
			return true
		}
	}else{
		if(!arr.includes(min)&&!arr.includes(max)){
			if(n-m===2 && (arr[0]<=max && arr[1]<=max)){
				return true
			}
		}
	}

}