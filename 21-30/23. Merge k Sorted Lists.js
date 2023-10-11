var mergeKLists = function(lists) {
    let a = []
    for(let i = 0 ; i < lists.length ; i++){
        let  k = lists[i]
        while(k != null){
            a.push(k.val)
            k = k.next
        }
    }
    a.sort(function(a,b){return a-b})
    let m = new ListNode(0)
    let  ans = m
    for(let j = 0 ; j< a.length ;j++){
        let n = new ListNode(a[j])
        m.next = n
        m = m.next
    }
    return ans.next
};