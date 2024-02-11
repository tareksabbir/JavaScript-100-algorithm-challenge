// write a function that returns the sum of two numbers 
// write a function that returns the sum of all numbers regardless of # params 
// hint arithmetic operators and restOperators and forEach()

// way one 
function sumOfAllParams(...params) {
    return params.reduce((total, value) => total + value)
}

let result = sumOfAllParams(1, 2, 3, 4, 5, 6)

console.log('way one: ', result)

// way two

function sumOfAllParams2(...params) {
    let sum = 0
    for (let value of params) {
        sum = sum + value
    }
    console.log('way two: ', sum)

}

sumOfAllParams2(10, 20, 30, 40, 50)


// way three

function sumOfAllParams3(...params) {
    let sumSoFar = 0
    params.forEach((value) => {
        sumSoFar += value
    })
    console.log('way three: ',sumSoFar)

}

sumOfAllParams3(100,200,300)
