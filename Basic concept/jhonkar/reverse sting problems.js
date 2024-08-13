// revers string 
function reverseString(str) {
    let reversText = ''
    for (let i = str.length - 1; i >= 0; i--) {
        let element = str[i];
        reversText = reversText + element;
        //console.log(element, reversText);
    }

    return reversText;

}
const strings = 'international';
console.log(reverseString(strings));


// word reverse

function reverseWord(str) {
    const words = str.split('');
    const news = words.reverse(' ');
    const revers = news.join('')
    console.log(revers);

}
const myString = 'international islamic university chittagong';
reverseWord(myString)



const myStrings = 'international islamic university chittagong';
//console.log(myStrings.split(""))