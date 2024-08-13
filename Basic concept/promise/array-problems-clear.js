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



// here we use reduce method 

const reduceMethod = oddArray.reduce((total, value) => {
    return total + value
})


console.log('reduce method total: ', reduceMethod)


// for of loop use 

const oddConcept = (oddArray) => {
    let sum = 0
    for (num of oddArray) {
        sum += num

    }
    return sum
}

console.log('odd concept : ', oddConcept(oddArray))







const newEven = (number) => {
    let total = []
    // for (let i = 0; i < number.length; i++) {
    //     if (number[i] % 2 == 0) {
    //         total.push(number[i])
    //     }
    // }

    for (num of number) {
        if (num % 2 == 0) {
            total.push(num)
        }
    }
    console.log(total)
    const totalEven = total.reduce((sum, value) => {
        return sum + value
    })
    return totalEven
}


const numbersOfArray = [10, 11, 12, 3, 4, 6, 7, 8, 9, 9, 8, 7]

//console.log(newEven(numbersOfArray))

// console.log(numbersOfArray.sort((a, b) => {
//     return a - b

// }))
// console.log(numbersOfArray.reverse())

const reduceDuplicate = (arr) => {
    let newArr = []
    for (num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num)
        }
    }

    newArr.sort((a, b) => {
        return a - b
    })
    console.log('new array: ', newArr)

}

reduceDuplicate(numbersOfArray)


const brikhorPeople = ['pen', 'pencil', 'vape', 'guti', 'muti', 'shuti', 'buti', 'others', 'book', 'pencil', 'guti', 'muti', 'shuti']


const uniqeBiriKhor = (biri) => {
    let unique = []
    for (p of biri) {
        if (!unique.includes(p)) {
            unique.push(p)
        }
    }

    console.log(unique.sort())

}

uniqeBiriKhor(brikhorPeople)