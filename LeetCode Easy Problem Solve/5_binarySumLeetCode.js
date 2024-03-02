
function binary_Sum(a,b){
    return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)
}

console.log(binary_Sum(10,1))


// WAY 2 

var addBinary = function(a, b) {
    let s1 = BigInt('0b' + a);
    let s2 = BigInt('0b' + b);
    return (s1+s2).toString(2)
};

addBinary(9,9)
