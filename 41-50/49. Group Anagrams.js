var groupAnagrams = function(strs) {
    let  hash = {}
    let res = []
    let len = strs.length
    for (let i = 0; i < len; i++) {
        let key = strs[i].split("").sort().join("")
        if (hash[key]) {hash[key].push(strs[i])}
        else {hash[key] = [strs[i]]}
    }
    Object.keys(hash).forEach((key)=>{res.push(hash[key])})
    return res;
};