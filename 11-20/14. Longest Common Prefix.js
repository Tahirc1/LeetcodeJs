var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || strs == "" ){return ""}
    strs.sort()
    let s = strs[0] // start string
    let e = strs[strs.length -1] // end string
    let c = 0 // pointer
    while( c < s.length) {
        // check if cth letter is same or not
        if(s[c] == e[c]){
            c++
        }else{
           break
        }
    }
    return c == 0 ? "" : s.substring(0, c);
};