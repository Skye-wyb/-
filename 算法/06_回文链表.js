let isPalindrome = function(head){
	let ans = ''
	let res = ''
	while(head){
		ans+=head.val
		res = head.val + res
		head = head.next
	}
	return ans === res
}

// 利用链表的后序遍历
let _isPalindrome = function(head){
	let left = head
	function traverse(right){
		if(!right) return true
		let res = traverse(right.next)
		res = res && (right.val===left.val)
		left = left.next
		return res
	}
	return traverse(head)
}