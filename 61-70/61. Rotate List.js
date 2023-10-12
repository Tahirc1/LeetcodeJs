var rotateRight = function(head, k) {
    let o = new ListNode(0)
    let [ans,a] = [o,[]]
    while(head != null){
        a.push(head.val)
        head = head.next
    }
    a.unshift(...a.splice(a.length - k%a.length))
    for(let i = 0 ; i < a.length ;i++){
        o = o.next = new ListNode(a[i])
    }
    return ans.next
};