var isValid = function(s) {
    let l = s.length+1;  // store length+1
    // while l is not equal to s.length
    while(l !== s.length) {
        l = s.length; // store s.length in l
        // when we replace () or {} or [] with ''
        // the length of string s is reduced
        s = s.replaceAll('()','');
        s = s.replaceAll('{}','');
        s = s.replaceAll('[]','');
        // if nothing is replaced l equals s.length
        // thus ending the while loop
    }
    // if s.length becomes 0 thus string had valid parentheses
    return s.length === 0;
}
