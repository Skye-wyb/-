function render(vnode,container){
	container.appendChild(_render(vnode))
}

function _render(vnode){
	if(typeof vnode === 'number'){
		vnode = String(vnode)
	}
	if(typeof vnode === 'string'){
		return document.createTextNode(vnode)
	}
	// 普通DOM
	const dom = document.createElement(vnode.tag)
	if(vnode.attrs){
		Object.keys(vnode.attrs).forEach(key=>{
			const value = vnode.attrs[key]
			dom.setAttribute(key,value)
		})
	}
	// 子数组递归
	vnode.children.forEach(child=>{
		render(child,dom)
	})
	return dom
}

