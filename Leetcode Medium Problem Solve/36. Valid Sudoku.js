var isValidSudoku = function(board) {
    const hash = {};
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === '.') continue; // if current value is equal '.' , skip to next index
            if(hash[board[i][j]] === undefined) { 
                const box = calculateBox(i,j);
                hash[board[i][j]] = [[i, j, box]]; // because the same value can be repeated, it is created as an array
            } 
            else { 
                for(let k = 0; k < hash[board[i][j]].length; k++) {  
                    const [row, col, box] = hash[board[i][j]][k];  // Get row, col, and box information of the same value as the current value
					
					// check current value is validated with sdoku rules
                    if(row === i || col === j) return false;  
                    else if(calculateBox(i,j) === box) return false;
                }
                hash[board[i][j]].push([i, j, calculateBox(i,j)]); // if it is valitated sudoku rules, push to hashmap  for example hash {'5': [ [ 2, 0, 1 ], [ 3, 3, 5 ] ] }
            }
        }
    }
    return true;
};


function calculateBox(row, col) { //calculate box number with row and col
 return Math.floor(row/3) * 3 + Math.floor(col/3);
}