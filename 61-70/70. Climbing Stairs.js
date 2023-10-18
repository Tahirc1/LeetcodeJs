var climbStairs = function(n) {
    if(n < 4){return n}
    let arr = [1,2,3]
    for(let i=4; i<= n;i++) {arr[i-1] = (arr[i-2] + arr[i-3]);}
    return arr[arr.length -1];
};