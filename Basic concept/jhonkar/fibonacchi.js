function fibonacchi(fibonan) {
    const fibo = [0, 1]
    for (let i = 2; i <= fibonan; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    console.log(fibo)

}

fibonacchi(12)
