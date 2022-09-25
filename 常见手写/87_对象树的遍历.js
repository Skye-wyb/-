// 深度优先的方式遍历 打印 name
// ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']
const tree = {
  name: 'root',
  children: [
    {
      name: 'c1',
      children: [
        {
          name: 'c11',
          children: [],
        },
        {
          name: 'c12',
          children: [],
        },
      ],
    },
    {
      name: 'c2',
      children: [
        {
          name: 'c21',
          children: [],
        },
        {
          name: 'c22',
          children: [],
        },
      ],
    },
  ],
}
function traverse(tree) {
  let res = []
  function dfs(root) {
    for (const key in root) {
      if (key === 'name') {
        res.push(root[key])
      } else if (key === 'children') {
        root[key].forEach((ele) => dfs(ele))
      }
    }
  }
  dfs(tree)
  return res
}

let ans = traverse(tree)
console.log(ans)
