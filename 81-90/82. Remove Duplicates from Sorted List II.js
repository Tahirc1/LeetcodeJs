var deleteDuplicates = function(head) {
    let obj = {}
    while(head != null){
        obj[head.val] = (obj[head.val])?obj[head.val]+1:1
        head = head.next
    }
    let a = []
    for(let c in  obj){
        if(obj[c] == 1){a.push(c)}
    }
    a.sort((a,b)=>{return a-b})
    let n = new ListNode()
    let ans = n
    for(let i = 0 ; i < a.length ; i++){
        n = n.next = new ListNode(a[i])
    }
    return ans.next
};