var twoSum = function(nums, target) {
    let map = new Map() // Create a map
    for(let i = 0 ; i <  nums.length ; i++){
        // if target-nums[i] is in map
        if(map.get(target-nums[i]) >= 0 ){
            // return answer
            return [map.get(target-nums[i]),i]
        }
        // set nums[i] = i in map
        map.set(nums[i],i);
    }
}
