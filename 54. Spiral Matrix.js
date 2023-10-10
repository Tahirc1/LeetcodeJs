var spiralOrder = function(matrix) {
    if(matrix.length == 0) { return a}
    let [a,rB,rE,cB,cE] = [[],0,matrix.length-1,0,matrix[0].length - 1]
        
    while(rB <= rE && cB <= cE) {
        for(let j = cB; j <= cE; j ++){
            a.push(matrix[rB][j])
        }
        rB++;
            
        for(let j = rB; j <= rE; j ++){
            a.push(matrix[j][cE])
        }
        cE--;
            
        if(rB <= rE){
            for(let j = cE; j >= cB; j --){
                a.push(matrix[rE][j])
            }
        }
        rE--;
            
        if(cB <= cE){
            for(let j = rE; j >= rB; j --){
                a.push(matrix[j][cB])
            }
        }
        cB ++
    }
    return a
}
