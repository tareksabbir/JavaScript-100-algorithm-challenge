// ekhane resuce ki kore total array tar jog kore ekta singel valu k return kore 
const numbers = [45, 4, 9, 16, 25];
function myFunction(total, value, index, array) {
    //console.log(total)
    // console.log(value)
    // console.log(index)
    // console.log(array)
    // console.log('......................')
    return total + value;
}
let newNum = numbers.reduce(myFunction)
console.log(newNum);