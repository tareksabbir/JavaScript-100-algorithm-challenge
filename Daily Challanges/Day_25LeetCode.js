var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
    
    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true; 
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
            return false; 
        }
        
        const temp = board[i][j];
        board[i][j] = '\0'; 
        for (const [di, dj] of directions) {
            if (backtrack(i + di, j + dj, k + 1)) {
                board[i][j] = temp; 
                return true;
            }
        }
        
        board[i][j] = temp; 
        return false;
    };
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};


const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = "ABCCED";

console.log(exist(board, word)); // Output: true