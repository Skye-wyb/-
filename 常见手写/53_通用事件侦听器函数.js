const eventUtils = {
	// 添加事件
	addEvent:function(element, type, handler){
		if(element.addEventListener){
			// false代表冒泡阶段
			element.addEventListener(type,handler,false)
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler)
		}else{
			element['on'+type] = handler
		}
	}
	// 移除事件
	removeEvent:function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false)
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler)
		}else{
			element['on'+type] = null
		}
	}
	// 获取目标事件
	getTarget:function(event){
		return event.target || event.srcElement
	}
	// 获取event对象的引用
	getEvent:function(event){
		return event || window.event
	}
	// 阻止默认冒泡
	stopPropagation:function(e){
		if(e.stopPropagation){
			e.stopPropagation()
		}else{
			e.cancelBubble = true
		}
	}
	// 取消默认行为
	preventDefault:function(e){
		if(e.preventDefault){
			e.preventDefault()
		}else{
			e.returnValue = false
		}
	}
}