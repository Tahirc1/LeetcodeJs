var isPalindrome = function(x) {
    // turn int to String
    let s = x+"" 
    // Iterate the String
    for(let i = 0 ; i < s.length/2 ; i++){
        // Check if match or not
        if(s[i] != s[(s.length-i-1)]){
            return false
        }
    }
    return true
};