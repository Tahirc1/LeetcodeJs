var isValidSudoku = function(board) {
    let row = []
    let col = []
    let box = []
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            let IndI = 3*Math.floor(i/3) + Math.floor(j/3)
            let IndJ = 3*(i % 3) + (j % 3)
            if (row.indexOf(board[i][j]) !=  -1 ){return false} 
            if (col.indexOf(board[j][i]) !=  -1 ){return false}
            if (box.indexOf(board[IndI][IndJ]) !=  -1){return false}

            if(board[i][j] != '.'){row.push(board[i][j])}
            if(board[j][i] != '.'){col.push(board[j][i])}
            if(board[IndI][IndJ] != '.'){box.push(board[IndI][IndJ])}
        }
        row = []
        col = []
        box = []
    }
    
    return true
}