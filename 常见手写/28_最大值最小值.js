function max_min (arr) {
	let max = Math.max.apply(null, arr)
	let min = Math.min.apply(null, arr)
	return [min, max]
}

let arr = [4, 2, 89, 0, 6, 5, 76, 27, 85, 3]
let [min, max] = max_min(arr)
console.log(min, max)