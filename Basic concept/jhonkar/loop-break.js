for (let i = 1; i < 100; i++) {
    //console.log(i);
    if (i >= 10) {
        break;
    }

}

let roast = 0;
while (roast < 10) {
    //console.log('vai roast den');
    roast++;
    if (roast >= 5) {
        break;
    }

}


const numbers = [45, 78, 89, 90, 23, 34, 10, 11, 32, 34, 21]
let nArray = []
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if (number > 60) {

        continue;
    }
    nArray.push(number)

}
console.log(nArray);



const myArray = ["apple", "banana", "carrot", "date", "eggplant"];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === "carrot") {
        continue; // skip "carrot"
    }
    console.log(myArray[i]);
}
