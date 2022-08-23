let sortList = function(head){
	if(!head){
		return head
	}
	let arr = []
	while(head){
		arr.push(head.val)
		head = head.next
	}
	arr.sort((a,b)=>a-b)
	let head1 = new ListNode(arr[0])
	let temp = head1
	for(let i=1;i<arr.length;i++){
		temp.next = new ListNode(arr[i])
		temp = temp.next
	}
	return head1
}