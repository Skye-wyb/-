/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let map = new Map()
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i)
    }
    let ans = []
    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i]) && !ans.includes(nums2[i])) {
            ans.push(nums2[i])
        }
    }
    return ans
};

var _intersection = function (nums1, nums2) {
    let set = new Set(nums1)
    let ans = nums2.filter(num => set.has(num))
    return [...new Set(ans)]
};