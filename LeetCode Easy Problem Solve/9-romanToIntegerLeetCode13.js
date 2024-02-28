// roman value to integer 
// for example I = 1 , v= r ,x = 10

function romanToInt(s) {
    let roman = { I: 1, V: 5, X: 10, L: 50, C: 10, D: 500, M: 1000 }
    let sum = 0
    let string = s.toUpperCase().split('')
    let arraylength = string.length

    for (let i = 0; i < arraylength; i++) {
        let currentValue = string[i]
        let nextValue = string[i + 1]
        if (roman[currentValue] < roman[nextValue]) {
            sum = sum + (roman[nextValue] - roman[currentValue])
            i++
        } else {
            sum = sum + roman[currentValue]
        }
    }

    return sum


}

romanToInt("VII")