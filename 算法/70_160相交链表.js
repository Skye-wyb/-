let _getIntersectionNode = function(headA,headB){
	if(!headA && !headB){
		return null
	}
	let h1 = headA
	let h2 = headB
	while(h1!=h2){
		h1 = h1?h1.next:headA
		h2 = h2?h2.next:headB
	}
	return h1
}


// Set实现
let getIntersectionNode = function(headA,headB){
	let set = new Set()
	let h1 = headA, h2 = headB
	while(h1){
		set.add(h1)
		h1 = h1.next
	}
	while(h2){
		if(set.has(h2)){
			return h2
		}
		h2 = h2.next
	}
	return null
}