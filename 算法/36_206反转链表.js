let reverseList = function (head) {
  let prev = null,
    cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

let reverseList1 = function (head) {
  if (!head || !head.next) {
    return head
  }
  let newHead = reverseList1(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
