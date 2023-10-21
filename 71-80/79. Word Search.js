var exist = function(board, word) {
     let found = false;
  const backtrack = (board, rIdx, cIdx, word, letterIdx) => {
    if(rIdx >= 0 && rIdx < board.length && cIdx >=0 && cIdx < board[0].length && board[rIdx][cIdx] === word[letterIdx]) {
      if(letterIdx === word.length-1) found ||= true;
      const curLetter = word[letterIdx];
      board[rIdx][cIdx] = '';
      backtrack(board, rIdx+1, cIdx, word, letterIdx+1);
      backtrack(board, rIdx-1, cIdx, word, letterIdx+1);
      backtrack(board, rIdx, cIdx+1, word, letterIdx+1);
      backtrack(board, rIdx, cIdx-1, word, letterIdx+1);
      board[rIdx][cIdx] = curLetter;
    }
  };

  let letterIdx = 0;
  board.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if(cell === word[letterIdx]) {
        backtrack(board, rIdx, cIdx, word, letterIdx);
        if(found) return found;
      }
    })
  });  
  return found;
}