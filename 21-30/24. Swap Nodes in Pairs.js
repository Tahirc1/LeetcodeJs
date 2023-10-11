var swapPairs = function(head) {
    let [a,n,m] = [[],2,[]]
    while(head != null){
       if(n != 0){
           m.push(head.val)
           n-- 
           head  = head.next
        }
        else{ 
            n = 2 ;
            a.push(m) ; 
            m = [] 
        } 
    }
    if(m.join("") != null ){a.push(m)}
    m = []
    for(let  i = 0 ; i < a.length ;i++){
        if(a[i].length == 2){ a[i] = a[i].reverse()}
        for(let  j = 0 ; j < a[i].length ; j++){
            m.push(a[i][j])
        }
    }
    let  h = new ListNode(0)
    let ans  = h
    for(let o = 0 ; o < m.length ; o++){
        h.next = new ListNode(m[o])
        h = h.next
    }
    return ans.next
};