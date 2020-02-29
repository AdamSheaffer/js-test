const wordExists = (board, word) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const coords = [row, col];
      // horizontal
      if (searchFromLocation(coords, board, word, 0, 1)) return true;
      // vertical
      if (searchFromLocation(coords, board, word, 1, 0)) return true;
      // diagonal up
      if (searchFromLocation(coords, board, word, 1, -1)) return true;
      // diagonal down
      if (searchFromLocation(coords, board, word, 1, 1)) return true;
    }
  }
  return false;
};

const searchFromLocation = (coords, board, word, xMovement, yMovement) => {
  if (!word) return true;
  const [row, col] = coords;
  const nextCoords = [row + yMovement, col + xMovement];

  return (
    board[row] !== undefined &&
    word[0] == board[row][col] &&
    searchFromLocation(nextCoords, board, word.slice(1), xMovement, yMovement)
  );
};

module.exports = wordExists;
