var findMedianSortedArrays = function(nums1, nums2) {
    let [ans,i,j,k] = [[],0,0,0] // create variable
    //add arrays into ans
    while( i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            ans[k] = nums1[i];i++;k++
        }else{
            ans[k] = nums2[j];j++;k++
        }
    }
    if(i < nums1.length){
        for(let m = i; m < nums1.length ; m++){
            ans[k] = nums1[i];i++;k++;
        }
    }
    if(j < nums2.length){
        for(let m = j; m < nums2.length ; m++){
            ans[k] = nums2[j];j++;k++
        }
    }
    // if length of array is odd return middle element
    if(k%2 == 1){return ans[Math.floor(k/2)]}
    else{return (ans[Math.floor(k/2)] + ans[Math.floor(k/2)-1])/2}
};