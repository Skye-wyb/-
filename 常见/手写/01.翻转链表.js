var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head
    }
    // 找到尾结点，将单链表形成环形链表
    let tail = head
    let length = 1
    while(tail.next){
        length++
        tail = tail.next
    }
    tail.next = head
    // 尾结点进行移动
    k = k % length
    for(let i = 0; i < length - k; i++){
        tail = tail.next
    }
    // 找到头结点，断开环形链表
    head = tail.next
    tail.next = null
    return head
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 
const v1 = new ListNode(1)
const v2 = new ListNode(2)
const v3 = new ListNode(3)
const v4 = new ListNode(4)
const v5 = new ListNode(5)
v1.next = v2
v2.next = v3
v3.next = v4
v4.next = v5

const head = rotateRight(v1,2)
console.log(head);