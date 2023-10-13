var setZeroes = function(matrix) {
    let [r,c] = [new Set(),new Set()]
    let [col,row] = [matrix[0].length,matrix.length]
    for(let i = 0 ; i < row; i++){
        for(let j = 0 ; j < col; j++){
            if(matrix[i][j] == 0){
                r.add(i);c.add(j)
            }
        }
    }
    let rz = (n) =>{
        for(let i = 0; i < col; i++){matrix[n][i] = 0}
    }
    let cz = (n) =>{
        for(let i = 0; i < row; i++){matrix[i][n] = 0}
    }
    r = Array.from(r.values())
    c = Array.from(c.values())
    for(let i = 0; i < r.length; i++){rz(r[i])}
    for(let i = 0; i < c.length; i++){cz(c[i])}
    return matrix
};