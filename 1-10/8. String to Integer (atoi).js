var myAtoi = function(s) {
// convert to number
let num = parseInt(s)
// if num smaller than negative limit 
if(num < -Math.pow(2, 31)){return -Math.pow(2, 31)}
// if num greater than positive limit
else if(num > Math.pow(2, 31) - 1){return Math.pow(2, 31) - 1}
// if num is NotANumber
else if(isNaN(num)){return 0}
// return number
else{return num}
};