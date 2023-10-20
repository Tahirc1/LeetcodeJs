var sortColors = function(nums) {
    let obj = {}
    let l =  nums.length
    if(l == 1){return nums}
    for(let i = 0 ; i < l ;i++){
        obj[nums[i]]= (obj[nums[i]])?obj[nums[i]]+1:1
    }
    let j = 0
    for(let x in obj){
        while(obj[x] > 0){
            if(nums[j] < x){}
            nums[j] = +x
            obj[x]--
            j++
        }
    }
};