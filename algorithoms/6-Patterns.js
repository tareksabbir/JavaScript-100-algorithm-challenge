// rectangle pattern

function rectangularPattern() {
    let row = 5
    let col = 5
    let stars = ''
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            stars += ' * '
        }
        stars += '\n'
    }
    console.log(stars)

}

rectangularPattern()

//hollow rectangle pattern

function hollowRectangle() {

    let row = 5
    let col = 5
    let stars = ''
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (j == 1 || j == col) {
                stars += ' * '
            } else if (i == 1 || i == row) {
                stars += " * "
            } else {
                stars += "   "
            }
        }
        stars += '\n'
    }
    //console.log(stars)
}

hollowRectangle()


function hollowRectanglePattern() {
    let row = 5
    let col = 5
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

hollowRectanglePattern()





