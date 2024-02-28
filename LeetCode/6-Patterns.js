// rectangle pattern

function rectangularPattern(row, col) {

    let stars = ''
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            stars += ' * '
        }
        stars += '\n'
    }
    console.log(stars)

}

rectangularPattern(5, 5)

//hollow rectangle pattern


function hollowRectanglePattern(row, col) {

    let stars = ''
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (j == 0 || j == col - 1) {
                stars += " * "
            }
            else if (i == 0 || i == row - 1) {
                stars += " * "
            } else {
                stars += "   "
            }

        }
        stars += "\n"
    }
    console.log(stars)

}

hollowRectanglePattern(5, 5)

// inverted half pyramid

function reversePattern(row) {
    let star = ""
    for (let i = row; i >= 1; i--) {
        star = star + " * ".repeat(i) + "\n"
    }
    console.log(star)
}

reversePattern(5)





