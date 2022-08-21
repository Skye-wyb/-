let compareVersion = function (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  const len = Math.max(v1.length, v2.length)
  for (let i = 0; i < len; i++) {
    const n1 = Number(v1[i] || 0)
    const n2 = Number(v2[i] || 0)
    if (n1 !== n2) {
      return n1 > n2 ? 1 : -1
    }
  }
  return 0
}
