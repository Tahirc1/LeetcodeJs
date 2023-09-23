var reverse = function(x) {
    // Number is +tive or -tive
    let m = (x > 0)?false:true
    // Save the absolute val
    x = Math.abs(x)
    // Create Variables
    let [rev,rem] = [0,0]
    // Run loop till x greater than 0
    while( x > 0){
        // Store remaainder in rem
        rem = Math.floor(x%10)
        // x is x/10 
        x = Math.floor(x/10)
        // store rem in rev
        rev = rev * 10 + rem
    }
    const MAX=2147483647,MIN=-2147483648;
    // if greater or lesstan limits return 0
    if( rev > MAX || rev <MIN){return 0}
    // Return Answer
    return (m)?0-rev:rev
};