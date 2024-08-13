//array and apply some methods-------------------------------------
// find odd sum  form the array 

function findOdd(number) {
    let oddN = [];

    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            oddN.push(number[i])
        }
    };

    //console.log(oddN);
    return oddN
}

const arrayNumber = [5, 7, 8, 10, 45, 30, 17, 19, 21, 40, 31]
let oddArray = findOdd(arrayNumber);
console.log(oddArray);

function sumOfOdd(numbers) {
    //console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {

        let index = i;
        let element = numbers[index]
        sum = sum + element
    }
    return sum
}


console.log(sumOfOdd(oddArray))

//find out odd sum form a array-----------------------

function findOdds(number) {
    let oddN = [];
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            oddN.push(number[i])
        }
    };

    for (let i = 0; i < oddN.length; i++) {
        let element = oddN[i]
        sum = sum + element
    }
    //console.log(oddN);
    return sum;

}

const arrayNumbers = [5, 7, 8, 10, 45, 30, 17, 19, 21, 40, 31]
let newSum = findOdds(arrayNumbers);

console.log('new sum : ', newSum)



// reduce duplicate arrey element and odd number sum ----------


function oddFindSum(num) {
    let noDuplicateNumber = []
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (!noDuplicateNumber.includes(num[i]) && num[i] % 2 !== 0) {
            noDuplicateNumber.push(num[i]);
            sum = sum + num[i];
        }
    }
    console.log('odd number Array = ', noDuplicateNumber)
    console.log('total number of sum = ', sum)
}

let arrays = [32, 34, 56, 45, 47, 23, 32, 43, 45, 45, 56, 76, 77, 78, 78, 98, 97, 97, 90,]

oddFindSum(arrays)



// who is tallest---------------------------

function maxArray(tall) {
    let largest = tall[0];
    for (let i = 0; i < tall.length; i++) {
        const element = tall[i];
        if (element > largest) {
            largest = element;
        }
    }
    console.log(largest);
}

let girlsHight = [120, 163, 110, 160, 220, 240, 189, 180]

maxArray(girlsHight)





function maxHight(num) {
    console.log(num);
    let large = num[0]
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (element > large) {
            large = element;
        }
    }
    console.log('she is the tallest: ', large);

}
let hights = [120, 342, 453, 21, 122, 22, 455, 6, 213, 234, 456, 654, 876, 45, 456, 567, 78, 890]
maxHight(hights)






