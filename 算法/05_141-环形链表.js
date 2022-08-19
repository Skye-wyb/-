let hasCycle = function(head){
	let f = head, s = head
	while(f && f.next){
		f = f.next.next
		s = s.next
		if(f === s){
			return true
		}
	}
	return false
}

let hasCycle = function(head){
	let cur = head
	while(cur){
		if(cur.flag){
			return true
		}
		cur.flag = true
		cur = cur.next
	}
	return false
}