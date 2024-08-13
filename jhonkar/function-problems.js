function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const studentScore = 85;
const studentGrade = calculateGrade(studentScore);
console.log(`The student's score is ${studentScore} and their grade is ${studentGrade}.`);



// is even 

function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log('this is an even number')
        return true
    } else {
        console.log('this is an odd number')
        return false
    }
}

console.log(evenOrOdd(20));



function leapYear(year) {
    if (year % 400 == 0 && year % 4 == 0 || year % 100 !== 0) {
        console.log('this is leap year', year)
    } else {
        console.log('this is not a leap year', year)
    }

}
leapYear(2196)
