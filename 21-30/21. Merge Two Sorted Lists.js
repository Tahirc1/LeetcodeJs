var mergeTwoLists = function(list1, list2) {
    let l = new ListNode(0);
    let head = l
    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            l.next  = list1
            list1 = list1.next
        }else{
            l.next  = list2
            list2 = list2.next
        }
        l = l.next
    }
    if (list1 == null) {
        l.next = list2;
    }
    else {
        l.next = list1;
    }
    return head.next
};