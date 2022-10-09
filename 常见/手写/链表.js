class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

ListNode.prototype.push = function (val, position) { }
let head = new ListNode(0, new ListNode(1, new ListNode(2)))
console.log(head)
