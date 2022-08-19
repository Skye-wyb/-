let isPalindrome = function(head){
	let ans = ''
	let res = ''
	while(head){
		ans+=head.val
		res = res + head.val
		head = head.next
	}
	return ans === res
}

// 利用链表的后序遍历
let isPalindrome = function(head){
	let ans = ''
	let res = ''
	while(head){
		ans+=head.val
		res = res + head.val
		head = head.next
	}
	return ans === res
}