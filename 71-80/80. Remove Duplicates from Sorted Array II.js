var removeDuplicates = function(nums) {
    let j = 0
    let [m,c,k] = [0,0,0]
    for(let i = 0 ; i <nums.length ;i++){
        k = nums[i]
        c = 0
        while(nums[i] == k){
            if(c < 2){
                nums[j++] = k
                c++
                m++
            }
            i++
        }
        i--
    }
    nums.length = m
};