// decimal to binary || octal || hexa Decimal number

let decimalToBinary = (num) => console.log(num.toString(2))
let decimalToOctal = (num) => console.log(num.toString(8))
let decimalToHexa = (num) => console.log(num.toString(18))

decimalToBinary(5)
decimalToOctal(10)
decimalToHexa(55)

/// way two 

const clouserFunc = (int) => {
    let num = int
    binaryNum = () => num.toString(2)
    octalNum = () => num.toString(8)
    hexaNum = () => num.toString(16)
    return {
        binaryNum: binaryNum(),
        octalNum: octalNum(),
        hexaNum: hexaNum()
    }
}

let clousar = clouserFunc(55)

console.log(clousar)

