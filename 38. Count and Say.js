var countAndSay = function(n) {
    if(n == 1){return "1"}
    let x = countAndSay(n-1)
    let s = ""
    let y = x[0]
    let c = 1
    for(let i = 1 ; i < x.length ;i++){
        if(x[i] == y){c++}
        else{
            s += c + y
            y = x[i]
            c = 1
        }
    }
    s += c + y
    return s
};