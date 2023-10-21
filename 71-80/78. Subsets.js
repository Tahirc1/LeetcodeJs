var subsets = function(nums) {
    let ans = [[]]
    let k = []
    for(let i = 0 ; i < nums.length ; i++){
        let n = ans.length
        for(let j = 0 ; j < n ;j++){
            k = Array.from(ans[j])
            k.push(nums[i])
            ans.push(k)
        }
    }
    return ans
};