//problem 1---------------------------------------------------------
// print out random numbers
// ekhane 1 and 10 included thakbe +1 ta shorai dile ar thakbe naha 

function getRandomNumber(max, min) {
    let randoms = Math.floor(Math.random() * (max - min + 1)) + min;
    return randoms
}
let randomNumber = getRandomNumber(1, 10)

console.log(randomNumber);