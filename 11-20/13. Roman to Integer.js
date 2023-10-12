var romanToInt = function(s) {
let ans = 0; // ans stores value of roman no.
// objects are used to refracter the code
// reducing multiple ifs to single if
let [obj1,obj2] = [{"I":2,"X":20},{"I":2,"X":20,"C":200}]
// loop the roman no. string
for(let i = 0 ; i < s.length;i++){
    // if I add 1 to ans
    if( s[i] == "I" ){ans += 1}
    // if V add 5 to ans
    if( s[i] == "V" ){
        ans += 5
        // if we have IV that means 4 but 
        // we have already add 1 in previous iteration
        // we need to subtract 2 to make it 4
        if( s[i-1] == "I" ) {ans -= 2}
    }
    // if X add 10 to ans
    if( s[i] == "X" ){
        ans += 10
        // if we have IX that means 9 but 
        // we have already add 1 in previous iteration
        // we need to subtract 2 to make it 9
        if( s[i-1] == "I" ) {ans -= 2}
    }
    // if L add 50 to ans
    if( s[i] == "L" ){
        ans += 50
        // we check the for any IL or XL combination
        // subtract the value accordingly
        if(obj1[s[i-1]]){ans -= obj1[s[i-1]]}
    }
    // if C add 100 to ans
    if( s[i] == "C" ){
        ans += 100
        // we check the for any IC or XC combination
        // subtract the value accordingly
        if(obj1[s[i-1]]){ans -= obj1[s[i-1]]}
    }
    // if D add 500 to ans
    if( s[i] == "D" ){
        ans += 500
        // we check the for any ID or XD or CD combination
        // subtract the value accordingly
        if(obj2[s[i-1]]){ans -= obj2[s[i-1]]}
    }
    // if M add 1000 to ans
    if( s[i] == "M"){
        ans += 1000
        // we check the for any IM or XM or CM combination
        // subtract the value accordingly
        if(obj2[s[i-1]]){ans -= obj2[s[i-1]]}
    }
}
return ans
};
