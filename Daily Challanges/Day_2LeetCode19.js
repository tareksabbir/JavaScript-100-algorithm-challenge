// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const removeNode = (node,n)=>{
        if(!node.next) return 1

        const pos =removeNode(node.next,n)+1
        if(pos==n+1){
            node.next =node.next.next
        }

        return pos
    }
    const pos=removeNode(head,n)
    return pos==n?head.next:head
};


//way 2 best approach

var removeNthFromEnd2 = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head

    let firstPointer = dummy
    let secondPointer = dummy

    // Move the second pointer ahead by n times
    for(let i = 0; i < n; i++){
        secondPointer = secondPointer.next
    }
    // After moving the second pointer till it's one ahead of n node, now lets start moving both pointers
    while(secondPointer.next){
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }

    //  Now if second's next hits null, we move the first to bypass its next
    firstPointer.next = firstPointer.next.next

    return dummy.next
};