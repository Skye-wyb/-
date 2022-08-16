function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(3,new ListNode(4,new ListNode(4,new ListNode(5)))))))
var deleteDuplicates = function(head){
	let node = new ListNode(-1)
	node.next = head
	let cur = node
	while(cur.next && cur.next.next){
		// 有重复结点
		if(cur.next.val = cur.next.next.val){
			let val = cur.next.val
			while(cur.next && cur.next.val === val){
				cur.next = cur.next.next
			}
		}else{
			// 不重复
			cur = cur.next
		}
	}
	return node.next
}
console.log(deleteDuplicates(head));