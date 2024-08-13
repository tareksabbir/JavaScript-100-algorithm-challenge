/// number sort and duplicate remove 

const numbers = [1, 1, 3, 2, 4, 5, 7, 7, 8, 4, 6, 3]

function duplicate(num) {
    let pure = []
    for (let i = 0; i < num.length; i++) {
        if (!pure.includes(num[i])) {
            pure.push(num[i]);
        }
    }
    let newArray = pure.sort(function (a, b) {
        return a - b;
    })
    console.log(newArray);

}
duplicate(numbers)


//// string sort and duplicate remove

const products = ['pen', 'pencil', 'vape', 'guti', 'muti', 'shuti', 'buti', 'others', 'book', 'pencil', 'guti', 'muti', 'shuti']


function sringSort(products) {
    let newProduct = [];
    for (const product of products) {
        if (!newProduct.includes(product)) {
            newProduct.push(product)
        }
    }
    let sortedStrings = newProduct.sort()
    console.log(sortedStrings);

}

sringSort(products)
