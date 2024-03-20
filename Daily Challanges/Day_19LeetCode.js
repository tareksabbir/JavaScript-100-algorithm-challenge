/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let count=0 
    let curr=list1
    let nodeA=null, nodeB=null
    while(count<=b){
        if(count===a-1){
            nodeA=curr
        }else if(count===b){
            nodeB=curr.next
        }
         count++
         curr=curr.next
    }
    curr=list2
    while(curr.next){
       curr=curr.next 
    }
    nodeA.next=list2
    curr.next=nodeB
    return list1
 };