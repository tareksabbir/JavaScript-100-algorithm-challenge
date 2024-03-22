/*create a function that takes a stepber (step) as an argument and return the amount of the boxes in the step of the sequence 
*/

function stepOfTheSequence(step) {
    let box = 0
    for (let i = 1; i <= step; i++) {
        if (i === 0) {
            continue
        } else if (i % 2 !== 0) {
            box = i + 3
        } else {
            box = i - 1
        }


    }
    console.log(box)
}

stepOfTheSequence(5)