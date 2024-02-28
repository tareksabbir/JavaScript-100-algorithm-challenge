function palindromes(string) {

    let newString = string.split("").reverse().join("")
    if (newString === string) {
        console.log("it is a palindrome")
    } else {
        console.log("it is not a palindrome")
    }
}

palindromes("hiih")


function newPalindrome(string) {
    const check = string.split("").every((char, index) => {
        return char === string[string.length - 1 - index]
    })
    console.log(check)

}
newPalindrome("racecar")




function newPalindrome2(string) {
    let newPalindromes = string.split("").reverse().join("")
    console.log(newPalindromes === string)

    let newPalindromes4 = string.split("").every((value, index) => {
        return value === string[string.length - 1 - index]
    })
    console.log("it is ", newPalindromes4)

}

newPalindrome2("mamama")