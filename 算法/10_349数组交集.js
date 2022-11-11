// Map实现
let intersection = function (nums1, nums2) {
	let map1 = new Map()
	let map2 = new Map()
	var ans = []
	for (let i = 0; i < nums1.length; i++) {
		map1.set(nums1[i], i)
	}
	for (let i = 0; i < nums2.length; i++) {
		if (map1.has(nums2[i]) && !map2.has(nums2[i])) {
			map2.set(nums2[i], i)
			ans[ans.length++] = nums2[i]
		}
	}
	return ans
}

// Set实现
let _intersection = function (nums1, nums2) {
	let set = new Set(nums2)
	let ans = nums1.filter(num => set.has(num))
	return [...new Set(ans)]
}