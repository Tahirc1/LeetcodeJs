var deleteDuplicates = function(head) {
    let a = new Set()
    let b = new ListNode(0)
    let c = b
    while(head != null ){
        a.add(head.val)
        head = head.next
    }
    for(let x of a){
        b = b.next = new ListNode(x)
    }
    return c.next
};