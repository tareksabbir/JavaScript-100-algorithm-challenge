
var islandPerimeter = function(grid) {

    let totalPerimeter = 0;
    let overlapPerimeter = 0

    for(let i=0; i< grid.length; i++){

        for(let j=0; j< grid[i].length; j++){
            if(grid[i][j] === 0){
                continue;
            }
            if(grid[i][j] === 1){
                totalPerimeter +=1;
            }
            if( j< grid[i].length-1 && grid[i][j] === 1 && grid[i][j+1] === 1){
                overlapPerimeter++;
            }
            if(i < grid.length-1 && grid[i][j] === 1 && grid[i+1][j] === 1 ){
                overlapPerimeter++;
            }
        }
    }
    totalPerimeter = 4*totalPerimeter;
    overlapPerimeter = overlapPerimeter*2;

    return totalPerimeter- overlapPerimeter;
};