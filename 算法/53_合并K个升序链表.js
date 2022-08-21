/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let ans = []
  if (!lists.length) {
    return null
  }
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      ans.push(lists[i].val)
      lists[i] = lists[i].next
    }
  }
  if (!ans.length) {
    return null
  }
  ans.sort((a, b) => a - b)
  let head = new ListNode(ans[0])
  let temp = head
  for (let i = 1; i < ans.length; i++) {
    temp.next = new ListNode(ans[i])
    temp = temp.next
  }
  return head
}
