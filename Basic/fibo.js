function fibo(n) {
    if (n <= 1) return n
    return fibo(n - 1) + fibo(n - 2)

}

console.log(fibo(10))
console.log(fibo(12))


function fibo2(n) {
    if (n <= 1) return n
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr)
    console.log(arr[n])
}

fibo2(10)


function fibo3(n) {
    if (n <= 1) return n
    return fibo3(n - 1) + fibo3(n - 2)
}

console.log("fibo 3: ", fibo3(10))


const fibo4 = (n) => {
    if (n <= 1) return n
    let arr = [0, 1]
    for (let i =2 ;i<=n;i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr)
}

fibo4(10)