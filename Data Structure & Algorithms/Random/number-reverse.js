function numberReverse(num) {
    let number = num.toString().split("").reverse().join("")
    return parseInt(number) * Math.sign(num)

}

//console.log(numberReverse(89))



function num2(n) {
    let number = n.toString().split("").reverse().join("")
    console.log(parseInt(number) * Math.sign(n))

}

num2(-98)