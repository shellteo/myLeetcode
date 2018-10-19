/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 循环了两次
var removeNthFromEnd = function(head, n) {
    let dumy = new ListNode(0);
    dumy.next = head;
    let length = 0;
    let first = head;
    while (first !== null) {
        length++;
        first=first.next
    }
    length = length - n;
    first = dumy;
    while (length>0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next
    return dumy.next;
};

// 两个指针，循环一次，第一个指针循环n+1
var removeNthFromEnd2 = function(head, n) {
    let dumy = new ListNode(0);
    dumy.next = head;
    let first = dumy;
    let second = dumy;
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;

    return dumy.next
};

let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(4);
let a4 = new ListNode(5);
let a5 = new ListNode(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a5.next = null;

removeNthFromEnd2(a1, 2);


