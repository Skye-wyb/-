const rootList = [
  { id: 1, parent: null, text: '菜单1' },
  { id: 11, parent: 1, text: '菜单1-1' },
  { id: 12, parent: 1, text: '菜单1-2' },
  { id: 2, parent: null, text: '菜单2' },
  { id: 21, parent: 2, text: '菜单2-1' },
]

function getTree (rootList, id, list) {
  for (const item of rootList) {
    if (item.parent === id) {
      list.push(item)
    }
  }
  for (const item of list) {
    item.children = []
    getTree(rootList, item.id, item.children)
    if (item.children.length === 0) {
      delete item.children
    }
  }
  return list
}
const res = getTree(rootList, null, [])
console.log('res', res)
