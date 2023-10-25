var partition = function(head, x) {
    if(head === null) return head;
    const leftDummy = new ListNode(0);
    const rightDummy = new ListNode(0);
    let left = leftDummy;
    let right = rightDummy;
    while(head){
    	if(head.val < x) {
    		left.next = head;
    		left = head;
    	} else {
    		right.next = head;
    		right = head;
    	}
    	head = head.next;
    }
    right.next = null;
    left.next = rightDummy.next;
    return leftDummy.next;
};