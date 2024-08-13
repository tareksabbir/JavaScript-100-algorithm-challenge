// ekta array er moddhe kon guli duplicate ase oi gulo ber kore show kora 

const numbers = [1, 1, 3, 2, 4, 5, 7, 7, 8, 4, 6, 3]

const duplicate = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
})

console.log(duplicate.sort());


/// unonic number gulo k ber koro   

const number = [1, 1, 3, 2, 4, 5, 7, 7, 8, 4, 6, 3]

const uniq = numbers.filter(function (value, index, array) {
    return array.indexOf(value) === index
})

//console.log(uniq.sort());

// uniq string using filter 
const products = ['pen', 'pencil', 'vape', 'guti', 'muti', 'shuti', 'puti', 'oti', 'book', 'pencil', 'guti', 'muti', 'shuti', 'zuti']

const uniqProduct = products.filter(function (value, index, array) {
    return array.indexOf(value) === index;
})

//console.log(uniqProduct.sort());

// filter notun  array return kore  filter kore sort korsi and then dupli bad disi 
const num = [1, 1, 3, 2, 4, 5, 7, 7, 8, 4, 6, 3]


function duplicateCheck(num) {

    let newNumber = [];

    const sortNumber = num.filter(function (value, index, array) {
        // if (value <= 5) {
        //     return value;
        // } aii vabeo kora jai or direct o kora jai 
        return value <= 5;
    })
    sortNumber.sort(function (a, b) {
        return a - b
    });

    for (const number of sortNumber) {
        if (!newNumber.includes(number)) {
            newNumber.push(number)
        }
    }
    //console.log(newNumber);



}

duplicateCheck(num)



