var myPow = function(x, n) {
    if(x == 1){return 1}
    if(n == 0){return 1}
    if(x == -1){
        if(n%2 == 0){return 1}
        else{return -1}
    }
    let  k = x
    if(n > 1){
        while( n > 1){
            x *= k
            n--
        }
        return x
    }else{
        while( n < 1){
        x *= 1/k
        n++
    }
        return x
    }
};