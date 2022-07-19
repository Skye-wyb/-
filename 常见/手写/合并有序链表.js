/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeKLists = function (lists) {
  let temp = []
  if (!lists.length) {
    return null
  }
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      temp.push(lists[i].val)
      lists[i] = lists[i].next
    }
  }
  if (!temp.length) {
    return null
  }
  temp.sort((a, b) => a - b)
  const head = new ListNode(temp[0])
  let res = head
  for (let i = 0; i < temp.length; i++) {
    res = res.next = new ListNode(temp[i])
  }
  return head
}
