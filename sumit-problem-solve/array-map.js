
// array mapping way 1
const numbers = [45, 4, 9, 16, 25];
function myFunction(value, index, array) {
    // console.log(value)
    // console.log(index)
    // console.log(array)
    // console.log('......................')
    return value * 2;
}
let newNum = numbers.map(myFunction)
console.log(newNum);



// array mapping way 2
let hope = numbers.map(function (value, index, array) {
    return value * 5;
})
console.log(hope);






