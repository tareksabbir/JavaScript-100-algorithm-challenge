// factorials
//1+2+3+5+6+...........
function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sumOfNumbers(7)

// 1*2+3*5*6+*...........
function sumOfNumber(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }
    console.log(sum);
}
sumOfNumber(5)



