var addTwoNumbers = function(l1, l2) {
    // Create a ListNode
    let ans = new ListNode(0)
    //Create variables we will use
    let [carry,x,y,sum,c] = [0,0,0,0,ans]
    //Run a while loop
    while( l1 != null ||  l2 != null || carry != 0){
        x = l1?l1.val:0 //get nodevalue of l1
        y = l2?l2.val:0 //get nodevalue of l2
        sum = x+y+carry //store sum of values
        carry = Math.floor(sum/10) //store carry
        c.next = new ListNode(sum%10) //add value to node
        c = c.next
        l1 = l1?l1.next: null //move to next node
        l2 = l2?l2.next:null // mode to next node
    }
    return ans.next
};