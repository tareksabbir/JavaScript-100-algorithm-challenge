function numberReverse(num) {
    let number = num.toString().split("").reverse().join("")
    return parseInt(number) * Math.sign(num)

}

console.log(numberReverse(89))