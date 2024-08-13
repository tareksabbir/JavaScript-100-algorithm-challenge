// 1+2+3+4+5+6.......
// shob gulor jogfol using recursion 
// recursion holo function er vitor theke function k bar bar call kora 

function sum(num) {
    if (num == 1) {
        return 1;
    }
    const news = num + sum(num - 1);
    return news
}

console.log(sum(10));

//// factorial using recursion 
function sum2(num) {
    if (num == 1) {
        return 1;
    }
    const news = num * sum2(num - 1);
    return news
}

console.log(sum2(5));