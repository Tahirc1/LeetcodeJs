var removeElement = function(nums, val) {
    // we have to return number of elements not equal to val in nums
    // while removing all occurenece of val in place
    let k = 0 
    // run a for loop over nums
    for(let  i = 0; i < nums.length  ;i++){
        // when nums[i] is not equal to val assign nums[k] with nums[i]
        // k is position(and counter) for value which are not equal to k
        if(!(nums[i] == val)){
            nums[k] = nums[i] 
            k++
        }
    }
    return k
};
