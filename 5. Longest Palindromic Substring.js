var longestPalindrome = function(s) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            // j == 0 for odd and j == 1 for even
            let left = i; 
            let right = left + j;
            while (s[left] && s[left] === s[right]) {
                // expands palindrome till the values are equal
                left--; // expands towards left
                right++; // expands towards right
            }
            if (right - left - 1 > str.length) {
                str = s.slice(left + 1, right);
            }
        }
    }
    return str;
};