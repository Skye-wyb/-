let addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null
  let carry = 0
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry
    // 当前没有节点
    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    // 最后一位有进位
    tail.next = new ListNode(carry)
  }
  return head
}


// 输入：l1 = [2, 4, 3], l2 = [5, 6, 4]
// 输出：[7, 0, 8]
// 解释：342 + 465 = 807.
