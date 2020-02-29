# JS Interview

### Word Search

Implement a function that can determine whether or not a word exists in a given Word Search puzzle. The function should check for horizontal, vertical, and diagonal matches.

The Word Search is held in the form of a 2D array.

```javascript
/*
const wordSearch = [
    ["W","D","V","V","C","O","L","L","A","T,","E","R","A","L","V","K"],
    ["I","N","T","E","R","E","S","T","E","G,","D","U","B","L","A","V"],
    ["N","O","L","C","H","L","T","I","D","E,","R","C","A","Y","L","Y"],
    ["D","B","A","O","T","N","E","M","E","R,","I","T","E","R","U","F"],
    ["E","R","U","N","U","A","S","C","B","C,","I","N","R","A","E","F"],
    ["X","N","R","O","J","O","S","R","T","P,","O","U","V","J","V","K"],
    ["M","I","C","M","N","L","A","F","A","M,","I","A","D","E","A","D"],
    ["W","C","C","Y","E","S","U","C","G","N,","I","R","A","H","S","N"],
    ["A","S","A","V","I","N","G","S","J","R,","M","A","R","K","E","T"]
];

*/
const wordExists = (board, word) => { ... };

wordExists(wordSearch, "ECONOMY"); // => true

wordExists(wordSearch, "SAVINGS"); // => true

wordExists(wordSearch, "INVEST"); // => true

wordExists(wordSearch, "JAVASCRIPTISFUN"); // => false
```

To run tests:

`npm test`
