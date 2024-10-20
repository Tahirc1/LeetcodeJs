var threeSum = function(nums) {
    // Create array a to store output array 
    let a = []
    // Create variable j and k for indexing nums[j] and nums[k] 
    // Create val1 and val2 for storing value of nums[j] and nums[k] respectively 
    let [j,k,val1,val2] = [0,0,0,0]
    // sort the input array ascendingly
    nums.sort(function(a,b){return a-b})
    // run loop over nums from (0,nums.length-2)
    // we need i , j , k so last usable index of will be nums.length-2
    // storing length helps a little bit for optimization
    len = nums.length
    for(let i = 0 ;i < len-2;i++){
        // nums[i] must be negative or 0 to get nums[i] + nums[j] + nums[k] == 0
        if(nums[i] > 0 ){continue}
        // we will cover all possible triplet for nums[i] so we dont need to rerun for same value 
        if(nums[i] == nums[i-1]){continue}
        // j will be the start pointer and k will be end pointer for our window
        j = 1 + i 
        k = len - 1
        // we will run this until the whole window is convered
        while(j < k ){
            if(nums[i] + nums[j] + nums[k] == 0){
                // if this condition is met we add it to answer array
                a.push([nums[i] , nums[j] , nums[k]])
                // we store value of nums[j] in val1
                val1=nums[j];
                // we skip all index with same value as nums[j] this will help up shorten the window
                while(j<k && nums[j]==val1) j++;
                val2=nums[k];
                // we skip all index with same value as nums[k] this will help up shorten the window
                while(j<k && nums[k]==val2) k--;
            // if total is < 0  we try to get a greater value for nums[j] (array is sorted ascending)
            }else if(nums[i]+nums[j]+nums[k]<0)  j++;  
            // if total is > 0  we try to get a smaller value for nums[k] (array is sorted ascending)
            else if(nums[i]+nums[j]+nums[k]>0)  k--;   
            // thus when this loop is done we will have all possible j and k for given nums[i]
        }
    }  
    // return the output array
    return a
};
