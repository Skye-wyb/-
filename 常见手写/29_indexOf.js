function _indexOf (arr, val) {
	if (!Array.isArray(arr)) return
	let length = arr.length
	for (let i = 0; i < length; i++) {
		if (arr[i] === val) {
			return i
		}
	}
	return -1
}

let nums = [1, 2, 3, 4, 5, 6]
console.log(_indexOf(nums, 5));