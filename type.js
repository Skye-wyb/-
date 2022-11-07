const trees = [
    {
        value: 1,
        children: [{ value: 11 }, { value: 12 }],
    },
    {
        value: 2,
        children: [
            {
                value: 21,
                children: [{ value: 31 }, { value: 32 }],
            },
            {
                value: 22,
            },
        ],
    },
]

function find (trees, filter) {

    let ans = null
    function dfs (trees, filter) {
        for (let i = 0; i < trees.length; i++) {
            if (filter(trees[i])) {
                ans = trees[i]
            }
            trees[i].children && dfs(trees[i].children, filter)
        }
        return ans
    }
    dfs(trees, filter)
    return ans
}

// { value: 21, children: [ { value: 31 }, { value: 32 } ] }
console.log(find(trees, (node) => node.value === 21))
