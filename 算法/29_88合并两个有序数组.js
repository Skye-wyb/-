let merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return nums1
  } else {
    if (nums1.length) {
      nums1.splice(m, n, ...nums2)
      return nums1.sort((a, b) => a - b)
    } else {
      return nums2
    }
  }
}

let merge1 = function (nums1, m, nums2, n) {
  let j = 0
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[j++]
  }
  nums1.sort((a, b) => a - b)
  return nums1
}
