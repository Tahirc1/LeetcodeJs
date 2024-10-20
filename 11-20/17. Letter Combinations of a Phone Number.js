var letterCombinations = function(digits) {
    // if digits is empty return []
    if(digits == ""){return []}
    // we create all possible strings a digit might correspond to
    // digit contains number 2-9 so we keep index 0 and 1 as 0
    let k = [0,0,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    // we convert first digit to number
    let m = Number(digits[0])
    // we split the corresponding string to alphabets
    // and it will store all output
    let a = k[m].split("")
    let [p,n] = [[],[]]
    // we loop over all digits from index 1 to last index
    for(let i = 1 ; i < digits.length ;i++){
        // p will store all possible alphabets for current digit
        p = k[digits[i]].split("")
        // n will store all the possible combinations made for that digit
        n = []
        // all possible combinations for given digit are are p.length*a.length
        for(let j = 0 ; j < p.length*a.length ;j++){
            // Math.floor(j/p.length) this let us stay in range of index 0-a.length-1
            // j%p.length  this let us stay in range of index 0-p.length-1
            // thus going over all possible combination for all given a and p indices
            n.push(a[Math.floor(j/p.length)]+p[j%p.length])
        }
        // we update the array a will all current possiblities
        a = n
    }
    // we return all possible combinations
    return a
};
