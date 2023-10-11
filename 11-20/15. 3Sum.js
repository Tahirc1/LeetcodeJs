var threeSum = function(nums) {
    let a = []
    let [j,k,val1,val2] = [0,0,0,0]
    nums.sort(function(a,b){return a-b})
    for(let i = 0 ;i < nums.length-2;i++){
        if(nums[i] > 0 ){continue}
        if(nums[i] == nums[i-1]){continue}
        j = 1 + i 
        k = nums.length - 1
        while(j < k ){
            if(nums[i] + nums[j] + nums[k] == 0){
                a.push([nums[i] , nums[j] , nums[k]])
                val1=nums[j];
                while(j<k && nums[j]==val1) j++;
                val2=nums[k];
                while(j<k && nums[k]==val2) k--;
            }else if(nums[i]+nums[j]+nums[k]<0)  j++; 
            else if(nums[i]+nums[j]+nums[k]>0)  k--;   
        }
    }  
    return a
};