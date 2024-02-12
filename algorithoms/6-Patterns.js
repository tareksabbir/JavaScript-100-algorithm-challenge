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




