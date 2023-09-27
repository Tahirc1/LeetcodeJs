var isValid = function(s) {
    let l = s.length+1; 
    while(l !== s.length) {
        l = s.length;
        s = s.replaceAll('()','');
        s = s.replaceAll('{}','');
        s = s.replaceAll('[]','');
    }
    return s.length === 0;
}