
// ekhane jodi lang ta true hoi tahiley sudhu right side element ta output e dibe
const lang = "LearnWithSumit";
const result1 = lang && "JavaScript";
console.log(result1); //JavaScript

const lang2 = false;
const result2 = lang2 && "JavaScript";

console.log(result2); //false

// or oparetor ekhane lang 3 jodi falsey value hoi jamon 0 , null , undifined , false etc.. thik tokhon e  right side value output dibe  otherwise lang3 e print korbe 
const lang3 = "LearnWithSumit";
const result3 = lang3 || "JavaScript";

console.log(result3); // LearnWithSumit