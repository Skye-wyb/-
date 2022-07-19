function addStrings(nums1, nums2) {
  let i = nums1.length - 1,
    j = nums2.length - 1,
    add = 0
  let ans = []
  while (i >= 0 || j >= 0 || add) {
    let a = i >= 0 ? nums1.charAt(i) - '0' : 0
    let b = j >= 0 ? nums2.charAt(j) - '0' : 0
    let res = a + b + add
    ans.push(res % 10)
    add = Math.floor(res / 10)
    i--
    j--
  }
  return ans.reverse().join('')
}
