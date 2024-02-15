// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// promise1 and promise2 are promises that resolve with a number


var addTwoPromises = async function (promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2])
    return value1 + value2
};

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2).then((res) => console.log(res))


// addTwoPromises(Promise.resolve(12), Promise.resolve(2))
//  .then(console.log); // 14
