var lengthOfLongestSubstring = function(s) {
    let [max,start] = [0,-1] // Create variables
    let a = {} // Create an object
    for (let i = 0; i < s.length; i++) {
        // if a char repeat update starts position 
        if(a[s[i]] > start){start = a[s[i]];}
        // set new position to character
        a[s[i]] = i;
        // check for max distance
        max = Math.max(max, i - start);
    }
    return max;
};