/*Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.


Example 1:

Input: matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]]
Output: [
    [1,4,7],
    [2,5,8],
    [3,6,9]]

Example 2:

Input: matrix = [ 
    [1,2,3],
    [4,5,6]
]
Output: [ 
    [1,4],
    [2,5],
    [3,6]]
*/


var transpose = function (matrix) {
    let array = Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(0))
    let len = matrix.length
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            array[col][row] = matrix[row][col]
        }
    }
    return array
};

//console.log(transpose([[1, 2],  [4, 5],  [5, 6]]))




function transposeMatrix(matrix) {
    let zeroMatrix = Array.from({ length: matrix[0].length }, () => {
        return new Array(matrix.length).fill(0)
    })
    let len = matrix.length
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] == undefined || null){
                matrix[row][col]=0
            }
            zeroMatrix[col][row] = matrix[row][col]
        }
    }
    return zeroMatrix


}

let result = transposeMatrix([[1, 2], [4, 5], [7]])

console.log(result)


