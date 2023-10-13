var reverseBetween = function(head, left, right) {
    let [a,b] = [[],[]]
    let k = new ListNode(0)
    let ans = k
    while(head != null){
        a.push(head.val)
        head = head.next
    }
    for(let i = 0 ; i < a.length ;i++){
        if(i >= left-1 && i <= right-1){
            b.push(a[i])
        }
    }
    b = b.reverse()
    let o = 0
    for(let i = 0 ; i < a.length ;i++){
        if(i >= left-1 && i <= right-1){
            k = k.next = new ListNode(b[o++])
        }else{
            k = k.next = new ListNode(a[i])
        }
    }
    return ans.next
};