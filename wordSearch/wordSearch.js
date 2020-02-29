// Todo: Implement this function
const wordExists = (board, word) => {
  const horizontal = board;
  const vertical = transpose(board);
  const diagonal = diagonalsToRows(board);
  const strings = asStringArray([horizontal, vertical, diagonal].flat());

  return strings.some(s => s.includes(word));
};

function transpose(board) {
  const transposed = board[0].map(_ => []);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      transposed[j][i] = board[i][j];
    }
  }

  return transposed;
}

// Converts diagonals to rows
function diagonalsToRows(board) {
  const flipped = [...board].reverse();
  return getDownwardDiagonals(board).concat(getDownwardDiagonals(flipped));

  function getDownwardDiagonals(board) {
    const newBoard = [];
    // Move down the rows, picking up each diagonal
    for (let startRow = 0; startRow < board.length; startRow++) {
      newBoard.push([]);
      for (let row = startRow, col = 0; row < board.length && col < board[row].length; row++ , col++) {
        newBoard[newBoard.length - 1].push(board[row][col]);
      }
    }

    // Move along the columns, picking up each diagonal
    for (let startCol = 1; startCol < board[0].length; startCol++) {
      newBoard.push([]);
      for (let row = 0, col = startCol; row < board.length && col < board[row].length; row++ , col++) {
        newBoard[newBoard.length - 1].push(board[row][col]);
      }
    }

    return newBoard;
  }
}

function asStringArray(board) {
  return board.map(row => row.join('').replace(/\W/g, ''));
}

module.exports = wordExists;
