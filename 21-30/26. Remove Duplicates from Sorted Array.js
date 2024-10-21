var removeDuplicates = function(nums) {
    // Create a set from nums array
    let s = new Set(nums)
    // convert that set to Array
    let num = Array.from(s.values())
    // replace nums[i] with num[i] we need to update nums
    for(let i =0;  i < num.length ; i++){
        nums[i] = num[i]
    }
    // return num.length
    return num.length
};
