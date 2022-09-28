function findLongestPath (arr) {
    const [m, n] = [arr.length, arr[0].length];
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const start = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    const dfs = (i, j, num) => {
        if (i < 0 || j < 0 || i >= m || j >= n || arr[i][j] <= num) return 0;
        if (dp[i][j]) return dp[i][j];
        let res = - Infinity;
        for (const [x, y] of start) {
            const [curx, cury] = [i + x, j + y];
            const temp = dfs(curx, cury, arr[i][j]) + 1;
            if (temp > res) {
                res = temp;
            }
        }
        dp[i][j] = res;
        return res;
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans = Math.max(ans, dfs(i, j, -1))
        }
    }
    return ans;
}
let arr = [[1, 2, 3, 3, 2], [4, 3, 6, 3, 5], [5, 6, 4, 7, 2], [8, 7, 6, 3, 9], [9, 9, 10, 7, 2]]
console.log(findLongestPath(arr));
// function getMax (ans, a, b) {
//     for (let i = a; i < arr.length;) {
//         for (let j = b; j < arr[0].length;) {
//             let temp = new Map()
//             j - 1 >= 0 && arr[i][j - 1] > arr[i][j] ? temp.set([i, j - 1], arr[i][j - 1]) : ''
//             i + 1 < arr.length && arr[i + 1][j] > arr[i][j] ? temp.set([i + 1, j], arr[i + 1][j]) : ''
//             j + 1 < arr[0].length && arr[i][j + 1] > arr[i][j] ? temp.set( [i, j + 1]) : ''
//             i - 1 >= 0 && arr[i - 1][j] > arr[i][j] ? temp.set(arr[i - 1][j], [i - 1, j]) : ''
//             console.log(temp);
//             let max = Math.max(...Array(temp.keys()))
//             console.log(max);
//             console.log(temp.get(max))
//             let [n, m] = temp.get(max)
//             i = n, j = m
//             ans += arr[n, m]
//         }
//     }
//     return ans
// }