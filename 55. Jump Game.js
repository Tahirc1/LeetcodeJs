var canJump = function(nums) {
    let g = nums.length-1
    for(let i = nums.length-2 ; i >= 0 ; i--){
        if(nums[i] >= g - i){
            g = i
        }
    }
    return (g==0)
};