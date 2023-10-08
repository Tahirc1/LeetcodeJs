var rotate = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return
    let n = matrix.length
    
    for (let row = 0; row < n; row++) {
        for (let col = row; col < n; col++) { 
            if (row == col){continue}
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
        }
    }
    for (let row = 0; row < n; row++) {
        matrix[row].reverse()
    }
};