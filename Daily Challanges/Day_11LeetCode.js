
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    const prefixSums = { 0: dummy };
    let prefixSum = 0;
    let current = head;
    while (current) {
        prefixSum += current.val;
        if (prefixSum in prefixSums) {
            let toDelete = prefixSums[prefixSum].next;
            let tempSum = prefixSum + toDelete.val;
            while (toDelete !== current) {
                delete prefixSums[tempSum];
                toDelete = toDelete.next;
                tempSum += toDelete.val;
            }

            prefixSums[prefixSum].next = current.next;
        } else {
            prefixSums[prefixSum] = current;
        }

        current = current.next;
    }

    return dummy.next;

};