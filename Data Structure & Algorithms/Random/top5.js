// is palinDrome

const palindrome = (x) => {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("")

}
//console.log(palindrome(121))

// fibonacci Number
const fibo = (x) => {
    if (x < 2) return x
    return fibo(x - 1) + fibo(x - 2)
}
console.log(fibo(12))

const fibo2 = (x) => {
    let arr = [0, 1]
    for (let i = 2; i <= x; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr[x])
}

fibo2(12)

const plain =(string)=>{
return string === string.split().reverse().join("")

}

console.log(plain("aabbaabba"))
