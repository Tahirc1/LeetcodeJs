var divide = function(dividend, divisor) {
    if(dividend == divisor){return 1}
    let k = (divisor > 0)?true:false
    let j = (dividend > 0)?true:false
    if(!k && dividend == -2147483648){dividend = -2147483647 }
    if(k == j){return Math.floor(dividend/divisor)}
    else{return Math.ceil(dividend/divisor)}
};