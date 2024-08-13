function myfunction(p1, p2) {
    let newbox = p1 * p2
    //return p1 + p2;
    return newbox;

}
let sum = "the value is " + myfunction(10, 20);

console.log(sum);




function feetToinch(inch) {
    let feet = inch / 12;
    return feet
}

let feet = feetToinch(20)

console.log(feet.toFixed(2));





function meterToKilo(meter) {
    let kilo = meter / 100
    return kilo
}

let kilometer = meterToKilo(1000);
console.log(kilometer.toFixed(2));
