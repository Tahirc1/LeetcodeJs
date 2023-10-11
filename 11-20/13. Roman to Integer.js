var romanToInt = function(s) {
let ans = 0;
let [obj1,obj2] = [{"I":2,"X":20},{"I":2,"X":20,"C":200}]
for(let i = 0 ; i < s.length;i++){
    if( s[i] == "I" ){ans += 1}
    if( s[i] == "V" ){
        ans += 5
        if( s[i-1] == "I" ) {ans -= 2}
    }
    if( s[i] == "X" ){
        ans += 10
        if( s[i-1] == "I" ) {ans -= 2}
    }
    if( s[i] == "L" ){
        ans += 50
        if(obj1[s[i-1]]){ans -= obj1[s[i-1]]}
    }
    if( s[i] == "C" ){
        ans += 100
        if(obj1[s[i-1]]){ans -= obj1[s[i-1]]}
    }
    if( s[i] == "D" ){
        ans += 500
        if(obj2[s[i-1]]){ans -= obj2[s[i-1]]}
    }
    if( s[i] == "M"){
        ans += 1000
        if(obj2[s[i-1]]){ans -= obj2[s[i-1]]}
    }
}
return ans
};