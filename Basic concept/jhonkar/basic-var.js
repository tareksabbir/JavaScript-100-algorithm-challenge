
let x = 5.500078;
let y = "6";
let z = parseInt(y) + x;
console.log(typeof y);
console.log(z);

let text1 = "korim mama gaja khai";
let text2 = ",aii jonne more jabe mama";
text = text1 + " " + text2;
console.log(text);

function myfunction(p1, p2) {
    let newbox = p1 * p2
    //return p1 + p2;
    return newbox;

}
let sum = "the value is " + myfunction(10, 20);

console.log(sum);



let array = []
const maths = Math.round(Math.random(1, 10) * 1000000);
array.push(maths);
console.log(maths);
console.log(array);