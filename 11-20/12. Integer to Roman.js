var intToRoman = function(num) {
    let ans = ""
    // Store all the roman numerals
    let string = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    // Store all roman numalrs in integers
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    for(let i=0; num != 0; i++){
        // while num is greater then value
        while(num >= value[i]){
            // subtract value from num
            num -= value[i]
            // add roman string to answer
            ans += string[i]
        }
    }
    return ans; 
}