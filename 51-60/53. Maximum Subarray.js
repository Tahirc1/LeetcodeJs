var maxSubArray = function(nums) {
    let ans = -9999999
    let sum = 0
    for(let i = 0 ; i < nums.length; i ++){
        sum+=nums[i]
        ans=Math.max(sum,ans)
        sum=Math.max(sum,0)
    }
   return ans
};