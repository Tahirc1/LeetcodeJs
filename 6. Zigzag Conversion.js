var convert = function(s, numRows) {
    if(numRows == 1){return s}
    //create variables
    let [a,m,n,k] = [[],0,1,-1]
    //array length equal no of rows
    for(let i = 0 ; i < numRows ; i++){
        a[i] = ""
    }
    //filling the array in zigzag
    while(m < s.length ){
        if(k == 0 ){n = 1}
        if( k == numRows -1){n = -1}
        k += n
        a[k] += s[m]
        m++
        
    }
    return a.join("")
};