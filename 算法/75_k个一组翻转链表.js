let reverseKGroup = function(head,k){
	let length = 0, temp = new ListNode(-1), pre = temp,cur = head,next
	temp.next = head
	while(cur){
		length++
		cur = cur.next
	}
	cur = head
	for(let i=0;i<Math.floor(length/k);i++){
		for(let j=0;j<k-1;j++){
			next = cur.next
			cur.next = next.next
			next.next = pre.next
			pre.next = next
		}
		pre = cur
		cur = cur.next
	}
	return temp.next
}