var removeDuplicates = function(nums) {
    let s = new Set(nums)
    let num = Array.from(s.values())
    for(let i =0;  i < num.length ; i++){
        nums[i] = num[i]
    }
    return num.length
};