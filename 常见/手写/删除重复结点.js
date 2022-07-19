function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function deleteSame(head) {
  if (!head || !head.next) {
    return head
  }
  let ret = new ListNode(-1, head)
  let pre = ret
  let cur = head
  while (cur) {
    if (cur.val === cur.next.val) {
      pre.next = cur.next.next
    }
    pre = cur
    cur = cur.next
  }
  return ret
}

let head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, null))))
    )
  )
)
let ans = deleteSame(head)
console.log(ans)
