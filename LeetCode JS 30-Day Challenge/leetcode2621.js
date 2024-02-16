// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.


async function sleep(millis) {
    function callBack(resolve, reject) {
        setTimeout(resolve, millis)
    }

    return new Promise(callBack)

}

sleep()


async function sleep2(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis);
        },millis)
    })

}

sleep2()


async function sleep3(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}


sleep3()

// clear set time out 
var cancellable = function(fn, args, t) {
    const cancelFn = () => clearTimeout(timeout);
    const timeout = setTimeout(() =>
        fn(...args)
    , t)
    
    return cancelFn;

};

// clear set interval
var cancellable = function(fn, args, t) {
    const clearInt =()=>clearInterval(interval)
    const interval= setInterval(()=>{
        fn(...args)
    },t)
    return clearInt
    
};