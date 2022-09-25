var tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众',
        },
        {
          name: '海淀区',
        },
        {
          name: '昌平区',
        },
      ],
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市',
        },
        {
          name: '绍兴市',
        },
        {
          name: '宁波市',
        },
      ],
    },
    {
      name: '四川省',
      children: [
        {
          name: '成都市',
          school: '西南石油大学',
        },
        {
          name: '巴中市',
          location: '四川省巴中市通江县广纳镇东山村十社--我的家',
        },
      ],
    },
  ],
}

function getAttr(tree, name) {
  const obj = {}
  function dfs(tree) {
    for (const key in tree) {
      if (tree.name === name) {
        obj[key] = tree[key]
      } else {
        tree.children && tree.children.forEach((ele) => dfs(ele))
      }
    }
  }
  dfs(tree)
  return obj
}
let ans = getAttr(tree, '巴中市')
console.log(ans)
