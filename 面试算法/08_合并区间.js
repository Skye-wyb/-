/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = []
    intervals.sort((a, b) => a[0] - b[0])

    let prev = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        if (prev[1] >= cur[0]) {
            prev[1] = Math.max(cur[1], prev[1])
        } else {
            res.push(prev)
            prev = cur
        }
    }
    res.push(prev)
    return res
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(merge([[1, 4], [4, 5]]));