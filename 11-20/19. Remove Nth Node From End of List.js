var removeNthFromEnd = function(head, n) {
    let count = 0 // counter
    let m = head // store head node
    // count no. of nodes
    while(head != null){
        head = head.next // travel to next node
        count++ // increment counter
    }
    // create new ListNode
    let k = new ListNode(0)
    let ans = k // store head of k list
    for(let i = 0 ; i < count ; i++){
        // if i is not nth node from end we add that node to k list
        if(i != count - n){
            k = k.next = new ListNode(m.val)
        }
        m = m.next // travel to next node
    }
    return ans.next
};
