var mergeTwoLists = function(list1, list2) {
    // add the list node to a variable
    let l = new ListNode(0);
    let head = l
    // create a while loop and check if the argument (list1 and list2) is not empty
    while(list1 != null && list2 != null){
        // if the value of list1 is less than list2
        if(list1.val < list2.val){
            //add the value to the node list of 1
            l.next  = list1
            list1 = list1.next
        }else{
            // if not add the value to the node list of 2
            l.next  = list2
            list2 = list2.next
        }

        //move on to the next node
        l = l.next
    }

    //add the remaining node values to the merged list
    if (list1 == null) {
        l.next = list2;
    }
    else {
        l.next = list1;
    }

    //return the combined sorted list
    return head.next
};