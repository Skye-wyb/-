// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
let mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list2.next, list1)
    return list2
  }
}

// 非递归
let mergeTwoLists1 = function (l1, l2) {
  let newHead = new ListNode(-1)
  let prev = newHead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 ? l1 : l2
  return newHead.next
}
