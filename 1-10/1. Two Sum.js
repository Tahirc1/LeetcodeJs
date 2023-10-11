var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0 ; i <  nums.length ; i++){
        if(map.get(target-nums[i]) >= 0 ){
            return [map.get(target-nums[i]),i]
        }
        map.set(nums[i],i);
    }
}
