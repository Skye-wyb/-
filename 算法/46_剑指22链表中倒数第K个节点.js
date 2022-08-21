let getKthFromEnd = function (head, k) {
  let node = head,
    n = 0
  while (node) {
    n++
    node = node.next
  }
  node = head
  for (let i = 0; i < n - k; i++) {
    node = node.next
  }
  return node
}
