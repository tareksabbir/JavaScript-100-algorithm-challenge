let first = [4, 5, 6, 7, 8, 9];
let second = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp = first;
first = second;
second = temp;
console.log(first, second);



let num1 = 4;
let num2 = 5;

[num1, num2] = [num2, num1];
console.log(num1, num2)
