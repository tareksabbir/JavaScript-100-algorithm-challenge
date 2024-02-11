function characterMap(string) {
    let countCharacter = {}

    //way 1 ------------------

    for (let value of string) {
        if (countCharacter[value]) {
            countCharacter[value]++
        } else {
            countCharacter[value] = 1
        }

    }
    //way 2 ------------------

    // string.split("").map((value) => {
    //     if (countCharacter[value]) {
    //         countCharacter[value]++
    //     } else {
    //         countCharacter[value] = 1
    //     }
    // })

    multipleCharacter(countCharacter)

}


function multipleCharacter(char) {
    let maxChar = 0
    let character

    for (let key in char) {
        if (char[key] > maxChar) {
            maxChar = char[key]
            character = key
        }
    }
    console.log(character, ":", maxChar)

}


//characterMap("hello")




function reverseString(string, callback) {
    let reverseValue = {}
    string.split("").map((value) => {
        if (reverseValue[value]) {
            reverseValue[value]++
        } else {
            reverseValue[value] = 1
        }
    })
    callback(reverseValue)
}

function reverseIng(obj) {
    let max = 0
    let char
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            char = key
        }
    }
    console.log(`the most common word in this string is : ${char} count ${max}`)


}

reverseString("helloooo", reverseIng)











