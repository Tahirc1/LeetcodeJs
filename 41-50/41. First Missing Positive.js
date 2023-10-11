var firstMissingPositive = function(nums) {
    let sortFilterArray = Array.from(new Set(nums)).sort((a,b) => a-b ).filter(num => num > 0)
    let pint = 1;
    for(let g=0; g<sortFilterArray.length; g++){
        if(sortFilterArray[g] != pint){
            return pint
        }
        pint++;
    }
    return pint
};