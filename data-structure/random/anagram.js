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

    if(Object.keys(countStr1).length !== Object.keys( countStr2).length){
        return false
    } 

    for(let key in countStr1){
        if (countStr1[key] !== countStr2[key]){
            return false
        }
    }

    return true
    


}

//console.log(anagrams("hi", "hi"))



function sorting(str){
    return str.replace(/[^\w]/g,'').split('').sort().join('')

}

function anagramFindBySorting(stringOne,stringTow){
    const  sortedStringOne = sorting(stringOne)
    const  sortedStringTwo = sorting(stringTow)
    
    if(sortedStringOne===sortedStringTwo){
        console.log('it is an anagram')
    }else{
        console.log('it is not an anagram')
    }

}

anagramFindBySorting("bad word","dab wor")

