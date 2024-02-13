// palindrome number
// input :121
//output true

const { idText } = require("typescript")

function palindromeNumber(numbers) {
    let num = numbers.toString().split("").reverse().join("")
    if (parseInt(num) === numbers) {
        console.log(true)
    } else {
        console.log(false)
    }
}
//palindromeNumber(323)


// way 2 if negative  value is given how to prevent it 


function palindromeCheck(numbers) {
    let num = numbers.toString().split("").reverse().join("")
    let reverse = parseInt(num) * Math.sign(numbers)
    if (reverse === numbers) {
        console.log("it is a palindrome")
    } else {
        console.log("it is not a palindrome")
    }

}

//palindromeCheck(-12121)

// way 3 not using string 


function reverseNumberCheckIsPalindrome(num) {
    if (num < 0 || num % 10 == 0 && num != 0) {
        return false
    }

    let reverse = 0
    while (num > reverse) {
        reverse = reverse * 10 + num % 10
        num = Math.floor(num / 10)
    }
    return ( reverse== num|| num == Math.floor(reverse/10))

}

let result = reverseNumberCheckIsPalindrome(9)
console.log(result)




// explanation of reverse the number without making a string 
// link : https://www.youtube.com/watch?v=ertEZ7ryhZY


function reverseNumber(num) {
    if (num >= 0 && num <= 9) {
        return true
    }

    let reverse = 0;
    //1. reverse= 3
    //2. reverse= 32 
    //3. reverse= 321
    while (num != 0) {
        reverse = reverse * 10 + num % 10
        //1. reverse = 0*10 + (123%10) = 0+3 =3
        //2. reverse = 3*10 +(12%10)= 30+ 2 =32
        //3. reverse = 32*10 + (1%10)=320+1=321
        num = Math.floor(num / 10)
        // 1. num = 123/10 = 12.3 ->floor = 12
        // 2. num = 12/10 = 1.2 -> floor = 1
    }
    return reverse


}

//console.log(reverseNumber(12345))