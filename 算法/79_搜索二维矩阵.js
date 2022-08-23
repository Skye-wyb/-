// 二维矩阵：从左到右为升序，从上到下为升序
let searchMatrix = function(matrix, target){
	if(matrix.length==0){
		return false
	}
	let [left,up] = [matrix[0].length-1,0]
	while(left >=0 && up<matrix.length){
		if(matrix[up][left] > target){
			left--
		}else if(matrix[up][left] < target){
			up++
		}else{
			return true
		}
	}
	return false
}