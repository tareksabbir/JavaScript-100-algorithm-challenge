const items = [
    {
        name: "bmw",
        model: "M750",
        serialNumber: 654789,
        color: "white"
    },
    {
        name: "Audi",
        model: "a7",
        serialNumber: 654769,
        color: "white"
    },
    {
        name: "bmwS",
        model: "a750",
        serialNumber: 634789,
        color: "white"
    },
]

//ARRAY OFF object er kono number khujte  .toString() e convert korte hoy include single vabe kaj kore like array or just object

//the includes method works properly because you are checking for the presence of a primitive value (number) in an array of primitive values (also numbers).

//The includes method can be called on arrays, strings, and other objects in JavaScript, but the behavior is different for each of them.

//In the original code, the serialNumber property is a number, and you're trying to call includes on it to check if it contains the num argument, which is also a number. However, includes method for numbers doesn't exist in JavaScript, and that's why the code throws an error. To fix it, you need to convert the serialNumber to a string first so that you can use the includes method on it.

// function matchItem(items, num) {
//     let matched = []
//     for (const item of items) {
//         if (item.serialNumber.toString().includes(num)) {
//             matched.push(item);
//         }
//     }
//     return matched
// }

// let match = matchItem(items, '634789');
//console.log(match)

function matchItems(items, num) {
    let matched = []
    for (const item of items) {
        if (item.serialNumber.includes(num)) {
            matched.push(item);
        }
    }
    return matched
}

let matching = matchItems(items, 'audi');
console.log(matching)



