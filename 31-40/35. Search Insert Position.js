var searchInsert = function(nums, target) {
    if(nums.indexOf(target) > -1){return nums.indexOf(target)}
    if(nums[nums.length - 1] < target){return nums.length}
    for(let  i = 0 ; i < nums.length ; i++ ){
        if(nums[i] > target){return i}
    }
};