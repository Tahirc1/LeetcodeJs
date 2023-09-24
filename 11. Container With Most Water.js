var maxArea = function(height) {
    let max = 0
    let i = 0 // start pointer
    let j = height.length - 1 // end pointer
    let k = 0 
    let water = 0
    while(i < j){
        // store height of short wall
        k = Math.min(height[i] , height[j])
        // water it can hold
        water = (j-i)*k 
        // if it stores more water make it max
        if(water > max){max = water}
        // move the line to new position
        if(height[i] < height[j]){i++}else{j--}
    }
    return max
};