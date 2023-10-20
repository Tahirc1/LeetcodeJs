var mergeKLists = function(lists) {
    let a = [] // create an array
    // loop over all the lists
    for(let i = 0 ; i < lists.length ; i++){
        let  k = lists[i] // store list in k
        // loop till end of list in k
        while(k != null){
            // push listnode value in a
            a.push(k.val)
            // go to next node
            k = k.next
        }
    }
    // sort the array
    a.sort(function(a,b){return a-b})
    let m = new ListNode(0) // create listnode
    let ans = m // store head of listnode in ans
    // loop the array
    for(let j = 0 ; j< a.length ;j++){
    // assign array j value to next listnode and go to next node
        m = m.next = new ListNode(a[j])
    }
    // return ans List
    return ans.next
};
