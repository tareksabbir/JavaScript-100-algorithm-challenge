function countStringsNew(str) {
    let count = {}
    for (let char of str.replace(/[^\w]/g, '')) {
        if (count[char]) {
            count[char]++
        } else {
            count[char] = 1
        }
    }
    return count

}



function anagrams(strOne, strTwo) {

    let countStr1 = countStringsNew(strOne)
    let countStr2 = countStringsNew(strTwo)

    if (Object.keys(countStr1).length !== Object.keys(countStr2).length) {
        return false
    }

    for (let key in countStr1) {
        if (countStr1[key] !== countStr2[key]) {
            return false
        }
    }

    return true



}

//console.log(anagrams("hi", "hi"))



function sorting(str) {
    return str.replace(/[^\w]/g, '').split('').sort().join('')

}

function anagramFindBySorting(stringOne, stringTow) {
    const sortedStringOne = sorting(stringOne)
    const sortedStringTwo = sorting(stringTow)

    if (sortedStringOne === sortedStringTwo) {
        console.log('it is an anagram')
    } else {
        console.log('it is not an anagram')
    }

}

anagramFindBySorting("bad word", "dab wor")


// way 3 
function map(str) {
    let result = new Map()
    str.split('').forEach(element => {
        result.set(element, result.get(element) ? result[element] + 1 : 1)
    });
    return result
}

function anagramMap(s, t) {
    let map1 = map(s)
    let map2 = map(t)
    if (map1.size !== map2.size) return false
    for (let n of map1) {
        if (map1[n] != map2[n]) return false
    }
    return true
}

//console.log(anagramMap("tarek", "kerat"))



//easy solution 


function easyAnagram(s, t) {
    if (s.length != t.length) return false
    return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(easyAnagram("rat", "amte"))