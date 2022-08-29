// src/vdom/patch.js

export function patch(oldVnode, vnode) {
  const isRealElement = oldVnode.nodeType
  if (isRealElement) {
    // oldVnode是真实dom元素，代表初次渲染
  } else {
    // oldVnode是虚拟dom，代表更新过程，使用diff算法
    if (oldVnode.tag !== vnode.tag) {
      // 如果新旧标签不一致 用新的替换旧的 oldVnode.el代表的是真实dom节点--同级比较
      oldVnode.el.parentNode.replaceChild(createEle(vnode), oldVnode.el)
    }
    // 如果旧节点是一个文本节点
    if (!oldVnode.tag) {
      if (oldVnode.text !== vnode.text) {
        oldVnode.el.textContent = vnode.text
      }
    }
    // 不符合上面两种 代表标签一致 并且不是文本节点
    // 为了节点复用 所以直接把旧的虚拟dom对应的真实dom赋值给新的虚拟dom的el属性
    const el = (vnode.el = oldVnode.el)
    // 更新属性
    updateProperties(vnode, oldVnode.data)
    // 老的儿子
    const oldCh = oldVnode.children || []
    // 新的儿子
    const newCh = vnode.children || []
    if (oldCh.length > 0 && newCh.length > 0) {
      // 新老都存在子节点
      updateChildren(el, oldCh, newCh)
    } else if (oldCh.length) {
      // 老的有儿子新的没有
      el.innerHTML = ''
    } else if (newCh.length) {
      // 新的有儿子
      for (let i = 0; i < newCh.length; i++) {
        const child = newCh[i]
        el.appendChild(createEle(child))
      }
    }
  }
}

// 解析vnode的data属性，映射到真实dom上
function updateProperties(vnode, oldProps = {}) {
  // 新的vnode属性
  const newProps = vnode.data || {}
  // 真实节点
  const el = vnode.el
  // 如果新的节点没有，需要把老的节点属性移除
  for (const k in oldProps) {
    if (!newProps[k]) {
      el.removeAtrribute(k)
    }
  }
  // d对style样式做特殊处理，如果新的没有，则需要把老的style值置为空
  const newStyle = newProps.style || {}
  const oldStyle = oldProps.style || {}
  for (const key in oldStyle) {
    if (!newStyle[key]) {
      el.style[key] = ''
    }
  }
  // 遍历新的属性，进行增加操作
  for (const key in newProps) {
    if (key === 'style') {
      for (const styleName in newProps.style) {
        el.style[styleName] = newProps.style[styleName]
      }
    } else if (key === 'class') {
      el.className = newProps.class
    } else {
      // 给这个元素添加属性，值就是对应的值
      el.setAttribute(key, newProps[key])
    }
  }
}

// updateChildren 更新子节点-diff核心方法
// 判断两个vnode的标签和key是否相同，如果相同，可以认为是同一节点，复用
function isSameVnode(oldVnode, newVnode) {
  return oldVnode.tag === newVnode.tag && oldVnode.key === newVnode.key
}
// diff算法核心 采用双指针的方式 对比新老vnode的儿子节点
function updateChildren(parent, oldCh, newCh) {
  // 老儿子的起始下标
  let oldStartIndex = 0
  // 老儿子的第一个节点
  let oldStartVnode = oldCh[0]
  // 老儿子的结束下标
  let oldEndIndex = oldCh.length - 1
  // 老儿子的结束节点
  let oldEndVnode = oldCh[oldEndIndex]

  // 新儿子的
  let newStartIndex = 0
  let newStartVnode = newCh[0]
  let newEndIndex = newCh.length - 1
  let newEndVnode = newCh[newEndIndex]

  // 根据key来创建老的儿子的index映射表  类似 {'a':0,'b':1} 代表key为'a'的节点在第一个位置 key为'b'的节点在第二个位置
  function makeIndexByKey(children) {
    let map = {}
    children.forEach((item, index) => {
      map[item.key] = index
    })
    return map
  }
  // 生成的映射表
  let map = makeIndexByKey(oldCh)

  // 只有当新老儿子的双指标的起始位置不大于结束位置的时候  才能循环 一方停止了就需要结束循环
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    // 因为暴力对比过程把移动的vnode置为 undefined 如果不存在vnode节点 直接跳过
    if (!oldStartVnode) {
      oldStartVnode = oldCh[++oldStartIndex]
    } else if (!oldEndVnode) {
      oldEndVnode = oldCh[--oldEndIndex]
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      // 头和头对比，依次向后追加
      // 递归比较儿子以及他们的子节点
      patch(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIndex]
      newStartVnode = newCh[++newStartIndex]
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      // 尾与尾对比，依次向前追加
      patch(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIndex]
      newEndVnode = newCh[--newEndIndex]
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // 老的头和新的尾相同 把老的头部移动到尾部
      patch(oldStartVnode, newEndVnode)
      parent.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling) //insertBefore可以移动或者插入真实dom
      oldStartVnode = oldCh[++oldStartIndex]
      newEndVnode = newCh[--newEndIndex]
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // 老的尾和新的头相同 把老的尾部移动到头部
      patch(oldEndVnode, newStartVnode)
      parent.insertBefore(oldEndVnode.el, oldStartVnode.el)
      oldEndVnode = oldCh[--oldEndIndex]
      newStartVnode = newCh[++newStartIndex]
    } else {
      // 上述四种情况都不满足 那么需要暴力对比
      // 根据老的子节点的key和index的映射表 从新的开始子节点进行查找 如果可以找到就进行移动操作 如果找不到则直接进行插入
      let moveIndex = map[newStartVnode.key]
      if (!moveIndex) {
        // 老的节点找不到  直接插入
        parent.insertBefore(createElm(newStartVnode), oldStartVnode.el)
      } else {
        let moveVnode = oldCh[moveIndex] //找得到就拿到老的节点
        oldCh[moveIndex] = undefined //这个是占位操作 避免数组塌陷  防止老节点移动走了之后破坏了初始的映射表位置
        parent.insertBefore(moveVnode.el, oldStartVnode.el) //把找到的节点移动到最前面
        patch(moveVnode, newStartVnode)
      }
    }
  }
  // 如果老节点循环完毕了 但是新节点还有  证明  新节点需要被添加到头部或者尾部
  if (newStartIndex <= newEndIndex) {
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      // 这是一个优化写法 insertBefore的第一个参数是null等同于appendChild作用
      const ele =
        newCh[newEndIndex + 1] == null ? null : newCh[newEndIndex + 1].el
      parent.insertBefore(createElm(newCh[i]), ele)
    }
  }
  // 如果新节点循环完毕 老节点还有  证明老的节点需要直接被删除
  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      let child = oldCh[i]
      if (child != undefined) {
        parent.removeChild(child.el)
      }
    }
  }
}
