const wordExists = require("../wordSearch/wordSearch");

const createBoard = () => {
  return [
    [ "W", "D", "V", "V", "C", "O", "L", "L", "A", "T", "E", "R", "A", "L", "V", "K" ],
    [ "I", "N", "T", "E", "R", "E", "S", "T", "E", "G", "D", "U", "B", "L", "A", "V" ],
    [ "N", "O", "L", "C", "H", "L", "T", "I", "D", "E", "R", "C", "A", "Y", "L", "Y" ],
    [ "D", "B", "A", "O", "T", "N", "E", "M", "E", "R", "I", "T", "E", "R", "U", "F" ],
    [ "E", "R", "U", "N", "U", "A", "S", "C", "B", "C", "I", "N", "R", "A", "E", "F" ],
    [ "X", "N", "R", "O", "J", "O", "S", "R", "T", "P", "O", "U", "V", "J", "V", "K" ],
    [ "M", "I", "C", "M", "N", "L", "A", "F", "A", "M", "I", "A", "D", "E", "A", "D" ],
    [ "W", "C", "C", "Y", "E", "S", "U", "C", "G", "N", "I", "R", "A", "H", "S", "N" ],
    [ "A", "S", "A", "V", "I", "N", "G", "S", "J", "R", "M", "A", "R", "K", "E", "T" ]
  ];
};

/* 
[
    ["W","D","V","V","C","O","L","L","A","T","E","R","A","L","V","K"],
    ["I","N","T","E","R","E","S","T","E","G","D","U","B","L","A","V"],
    ["N","O","L","C","H","L","T","I","D","E","R","C","A","Y","L","Y"],
    ["D","B","A","O","T","N","E","M","E","R","I","T","E","R","U","F"],
    ["E","R","U","N","U","A","S","C","B","C","I","N","R","A","E","F"],
    ["X","N","R","O","J","O","S","R","T","P","O","U","V","J","V","K"],
    ["M","I","C","M","N","L","A","F","A","M","I","A","D","E","A","D"],
    ["W","C","C","Y","E","S","U","C","G","N","I","R","A","H","S","N"],
    ["A","S","A","V","I","N","G","S","J","R","M","A","R","K","E","T"]
  ];
*/

describe("Word Search", () => {
  let board;

  beforeEach(() => {
    board = createBoard();
  });

  /*********************
  HORIZONTAL TESTS
  **********************/

  it("should find short horizontal word", () => {
    expect(wordExists(board, "IN")).toBeTrue();
  });

  it("should find short horizontal word on left border", () => {
    expect(wordExists(board, "AS")).toBeTrue();
  });

  it("should find short horizontal word on right border", () => {
    expect(wordExists(board, "ET")).toBeTrue();
  });

  it("should find longer horizontal word", () => {
    expect(wordExists(board, "COLLATE")).toBeTrue();
  });

  it("should not find non-existant word", () => {
    expect(wordExists(board, "DEVELOPER")).toBeFalse();
  });

  it("should not find non-existant word 2", () => {
    expect(wordExists(board, "FOOBARBAZ")).toBeFalse();
  });

  it("should not find non-existant word 3", () => {
    expect(wordExists(board, "JASMINE")).toBeFalse();
  });

  it("should not find word that's too long", () => {
    expect(wordExists(board, "FRONTENDJAVASCRIPTDEVELOPER")).toBeFalse();
  });

  /*********************
  VERTICAL TESTS
  **********************/

  it("should find a vertical word", () => {
    expect(wordExists(board, "TAG")).toBeTrue();
  });

  it("should find a left aligned vertical word", () => {
    expect(wordExists(board, "WIND")).toBeTrue();
  });

  it("should find a right aligned vertical word", () => {
    expect(wordExists(board, "FFKD")).toBeTrue();
  });

  /*********************
  DIAGONAL TESTS
  **********************/
  it("should find a downward diagonal word", () => {
    expect(wordExists(board, "INVEST")).toBeTrue();
  });

  it("should find an upward diagonal word", () => {
    expect(wordExists(board, "ACCOUNT")).toBeTrue();
  });
});
