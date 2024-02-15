// left shift by power of two
// shiftToLeft(5,2)=>20//10<<3 =10*2^3 =10*8=80

const shiftToLeft = (n1, n2) => n1 << n2
console.log(shiftToLeft(5, 2))
console.log(shiftToLeft(10, 3))

// ekhane hoi ki 5 ta holo value and porer man ta power hishebe kaj kore and aii kaj ta korar jonne amra (<<) aii operator ta use korsi 

// 5 * 2^2 = 10
// 10 * 2^3 = 10*8=80 

//aii vabe bepar ta hoi 
// ekhane 5 er binary number holo 101 
// ekhon aii khane leftshift operator er karone 101 ta 2 ta bit or 2 ta ghor shamne agabe tahole hobe ki ager faka jaigai 2 ta 0 boshe jabe and tokhon number ta hobe 10100 jar decimal number = 10
