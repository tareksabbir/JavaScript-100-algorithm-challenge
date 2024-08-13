// largest number find out 
// way 1

const time = new Date().getHours();
let greeting;
if (time < 10) {
    console.log(greeting = "good morning")
}
else if (time < 20) {
    console.log(greeting = 'good after noon')
}
else {
    console.log(greeting = 'good after noon')
}


// way 2
function lgNumber(a, b, c) {
    if (a > b && a > c) {
        console.log('a is largest number')
    }
    else if (b > a && b > c) {
        console.log('b is largest number')
    }
    else {
        console.log('c is largest number')
    }
}

lgNumber(13, 79, 45)

// way 3
function largest(a, b, c) {
    const large = Math.max(a, b, c);
    return large
}

let newn = largest(100, 600, 300)

console.log('the learge number is ' + newn)


// find out who is small
// way 1
function large(a, b, c) {
    const large = Math.min(a, b, c);
    return large
}


let larges = large(20, 30, 40)

console.log('the small number is ' + larges)


// way 2
function triangle(base, hight, angel) {
    if (base == hight || base == angel) {
        console.log('this triangle is isosceles')
    }
    else {
        console.log('this triangle is not isosceles')
    }

}

triangle(90, 8, 9);



