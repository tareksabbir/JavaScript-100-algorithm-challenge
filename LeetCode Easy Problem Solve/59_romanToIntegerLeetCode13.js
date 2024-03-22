// roman value to integer 
// for example I = 1 , v= r ,x = 10

function romanToInt(s) {
    let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let sum = 0;
    let string = s.toUpperCase().split('');
    let arraylength = string.length;

    for (let i = 0; i < arraylength; i++) {
        let currentValue = roman[string[i]];
        let nextValue = roman[string[i + 1]];

        if (nextValue && currentValue < nextValue) {
            sum += nextValue - currentValue;
            i++; 
        } else {
            sum += currentValue;
        }
    }

    return sum;


}

romanToInt("VII")
