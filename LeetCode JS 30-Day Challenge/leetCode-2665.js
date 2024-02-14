// counter 2 
// Write a function createCounter. It should accept an initial initeger init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]



var createCounter = function (init) {
    let count = init
    return {
        increment() {
            return ++init
        },
        decrement() {
            return --init
        },
        reset() {
            return count
        }

    }


};


const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
// 6
// 5
// 4





