var letterCombinations = function(digits) {
    if(digits == ""){return []}
    let k = [0,0,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let m = Number(digits[0])
    let a = k[m].split("")
    let [p,n] = [[],[]]
    for(let i = 1 ; i < digits.length ;i++){
        p = k[digits[i]].split("")
        n = []
        for(let j = 0 ; j < p.length*a.length ;j++){
            n.push(a[Math.floor(j/p.length)]+p[j%p.length])
        }
        a = n
    }
    return a
};