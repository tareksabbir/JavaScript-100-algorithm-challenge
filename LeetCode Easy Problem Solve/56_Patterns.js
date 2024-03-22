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








function makePattern(rows, col) {
    let stars = ''
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            stars += ' * '
        }
        stars += '\n'
    }
    return stars

}

console.log(makePattern(6, 6))


function hollowRectangle(row, col) {
    let star = ''
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (j == 0 || j == col - 1) {
                star += ' * '
            }
            else if (i == 0 || i == row - 1) {
                star += ' * '
            } else {
                star += '   '
            }

        }
        star += '\n'
    }
    console.log(star)
}

hollowRectangle(6, 6)



function reverseMethod(n) {
    let start = ''
    for (let i = n; i >= 1; i--) {
        start = start + ' * '.repeat(i) + '\n'

    }
    console.log(start)

}
reverseMethod(6)