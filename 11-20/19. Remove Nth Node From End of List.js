var removeNthFromEnd = function(head, n) {
    let count = 0
    let m = head
    while(head != null){
        head = head.next
        count++
    }
    let k = new ListNode(0)
    let ans = k
    for(let i = 0 ; i < count ; i++){
        if(i != count - n){
            k = k.next = new ListNode(m.val)
        }
        m = m.next
    }
    return ans.next
};