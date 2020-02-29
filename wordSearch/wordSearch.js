const wordExists = (board, word) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (searchFromLocation(row, col, board, word, 0, 1)) return true;
      if (searchFromLocation(row, col, board, word, 1, 0)) return true;
      if (searchFromLocation(row, col, board, word, 1, -1)) return true;
      if (searchFromLocation(row, col, board, word, 1, 1)) return true;
    }
  }
  return false;
};

const searchFromLocation = (row, col, board, word, xMovement, yMovement) => {
  return (
    !word ||
    (board[row] !== undefined &&
      word[0] == board[row][col] &&
      searchFromLocation(
        row + yMovement,
        col + xMovement,
        board,
        word.slice(1),
        xMovement,
        yMovement
      ))
  );
};

module.exports = wordExists;
