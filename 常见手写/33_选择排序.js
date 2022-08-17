function selectSort(arr){
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				[arr[i],arr[j]] = [arr[j],arr[i]]
			}
		}
	}
	return arr
}

let arr = [1, 2, 7, 8, 4, 3, 13, 23, 41, 0]
let ans = selectSort(arr)
console.log(ans)