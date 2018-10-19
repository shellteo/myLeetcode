/*
 * @Author: zhangxiang
 * @Date: 2018/10/8
 * @Last Modified by: zhangxiang
 * @Last Modified time: 2018/10/8
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(2);
var l1_1 = new ListNode(4);
var l1_2 = new ListNode(3);
l1.next = l1_1;
l1_1.next = l1_2;
var l2 = new ListNode(5);
var l2_1 = new ListNode(6);
var l2_2 = new ListNode(4);
l2.next = l2_1;
l2_1.next = l2_2;
var addTwoNumbers = function (l1, l2) {
    var result = [];
    while (l1 !== null || l2 !== null) {
        if (l1 === null) {

        }
        if (l2 === null) {

        }
        l1 = l1.next;
    }
};
console.log(addTwoNumbers(l1, l2));