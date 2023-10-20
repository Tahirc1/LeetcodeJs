var searchMatrix = function(matrix, target) {
    for(let i = 0 ; i < matrix.length ; i++){
        if(target > matrix[i][matrix[0].length-1] ){
            continue
        }
        for(let j = 0 ; j < matrix[0].length ; j++){
            if(matrix[i][j] == target){
                return true
            }
        }
    }
    return false
};