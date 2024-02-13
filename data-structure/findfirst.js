function findFirst(words) {
    let newArray = []
    words.map((string) => {
        let newString = string.split("").reverse().join("")
        if (newString === string) {
            newArray.push(string)
        }
    })

    if (newArray.length !== 0) {
        return newArray[0]
    } else {
        newArray.push("")
        return newArray[0]
    }


}

console.log(findFirst(['baby', 'babu']))


function findFirst(words) {
    let lengthOfArray = words.length
    for (let i = 0; i < lengthOfArray; i++) {
        const string = words[i];
        let isPalindrome = true;
        for (let j = 0; j < string.length / 2; j++) {
            if (string[j] !== string[string.length - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            return string;
        }
    }
    return "";
}

console.log(findFirst(['baby', 'babu']));


