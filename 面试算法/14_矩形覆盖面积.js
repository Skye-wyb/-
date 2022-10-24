function getArea (A1, B1, A2, B2) {
    let rectInfo1 = getRectInfo(A1, B1)
    let rectInfo2 = getRectInfo(A2, B2)
    let maxX = Math.max(rectInfo1.maxX, rectInfo2.maxX)
    let minX = Math.min(rectInfo1.minX, rectInfo2.minX)
    let maxY = Math.max(rectInfo1.maxY, rectInfo2.maxY)
    let minY = Math.max(rectInfo1.minY, rectInfo2.minY)
    if (maxX - minX < 0 || maxY - minY < 0) return 0
    return (maxX - minX) * (maxY - minY)
}

function getRectInfo (A, B) {
    let rectInfo = {}
    rectInfo.maxX = A[0] > B[0] ? A[0] : B[0]
    rectInfo.minX = A[0] > B[0] ? B[0] : A[0]
    rectInfo.maxY = A[1] > B[1] ? A[1] : B[1]
    rectInfo.minY = A[1] > B[1] ? B[1] : A[1]
    return rectInfo
}