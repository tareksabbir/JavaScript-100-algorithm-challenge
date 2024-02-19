// fibonacci number 

//  recursion fib total

const fibonacci2 = (num) => {
    if (num < 2) {
        return num
    }
    return fibonacci2(num - 1) + fibonacci2(num - 2)
}

console.log(fibonacci2(10))

// way 3 index value 

var fib = (n) => {
    if (n <= 1) return n
    const sum = [0, 1]
    for (let i = 2; i <= n; i++) {
        sum.push(sum[i - 1] + sum[i - 2])
    }
    return sum[n]
};

console.log(fib(10)) 