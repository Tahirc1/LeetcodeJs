var isValidSudoku = function(board) {
    // create variable to store row , col and box values
    let row = []
    let col = []
    let box = []
    // loop i over 0-8
    for (let i = 0; i <= 8; i++){
        // loop j over 0-8
        for (let j = 0; j <= 8; j++){
            // this will help us get position of each cell from board
            let IndI = 3*Math.floor(i/3) + Math.floor(j/3)
            let IndJ = 3*(i % 3) + (j % 3)
            // check if value is already in row , col or box and return false
            if (row.indexOf(board[i][j]) !=  -1 ){return false} 
            if (col.indexOf(board[j][i]) !=  -1 ){return false}
            if (box.indexOf(board[IndI][IndJ]) !=  -1){return false}
            // if not then add value to row , col and box
            if(board[i][j] != '.'){row.push(board[i][j])}
            if(board[j][i] != '.'){col.push(board[j][i])}
            if(board[IndI][IndJ] != '.'){box.push(board[IndI][IndJ])}
        }
        // reset row , col and box array
        row = []
        col = []
        box = []
    }
    
    return true
}
