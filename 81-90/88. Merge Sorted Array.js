var merge = function(nums1, m, nums2, n){
    nums1.length = m
    nums2.length = n
    let ans =  nums1.concat(nums2)
    ans.sort((a,b)=>a-b)
    for(let  i = 0 ; i < ans.length ; i++){
        nums1[i] = ans[i]
    }
};