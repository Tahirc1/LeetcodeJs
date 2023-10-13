var uniquePaths = function(m, n) {
    let a = [1,2,6]
    let fac = (k)=>{
        if(k < a.length){return }
        let p= a.length 
        while(k > a.length){
           a.push( (p+1) * a[p-1] )
           p++
        }
    }
    fac(m+n-2)
    let res = ((a[m+n-3]/(a[m-2]))/a[n-2])
    return (m===1||n===1) ? 1 : res
};