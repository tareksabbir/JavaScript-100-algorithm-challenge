// vowel count 
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowel(sentence) {
    let count = 0;
    const letters = Array.from(sentence);// ekhane array.form diye sentence ta k array te convert kore felsi 
    // aii array k (letters er moddhe jmn ase) for each loop e chalai ekta function e pathaisi jekhane function ta const vowel namaer j array e ase tar sathe chek korse and jokhon e mill paise tokhon e count er man ek kore barai dise 
    letters.forEach(function (value) {
        if (vowels.includes(value)) {
            count++
        }
    })
    return count;
}
let totalCount = countVowel('I Love Bangladesh')
//console.log('total number off value : ', totalCount)





// practice 

const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowelLetters(sentence) {
    let count = 0;
    let countConsonant = 0
    let letter = Array.from(sentence);

    letter.forEach(function (value) {
        if (vowel.includes(value)) {
            count++;
        } else if (!vowel.includes(value)) {
            countConsonant++;

        }
    })
    console.log('total consonants word: ', countConsonant)
    return count;
}
const newSentence = 'I Love You , I Love javasript so much'
let result = countVowelLetters(newSentence);
console.log('total Vowel word: ', result);