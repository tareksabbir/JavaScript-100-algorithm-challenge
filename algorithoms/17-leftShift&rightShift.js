// left shift by power of two(2^n) dara gun
// shiftToLeft(5,2)=>20//10<<3 =10*2^3 =10*8=80

const shiftToLeft = (n1, n2) => n1 << n2
console.log("left shift:", shiftToLeft(5, 2))
console.log("left shift:", shiftToLeft(10, 3))

// ekhane hoi ki 5 ta holo value and porer man ta power hishebe kaj kore and aii kaj ta korar jonne amra (<<) aii operator ta use korsi 

// 5 * 2^2 = 10
// 10 * 2^3 = 10*8=80 

//aii vabe bepar ta hoi 
// ekhane 5 er binary number holo 101 
// ekhon aii khane leftshift operator er karone 101 ta 2 ta bit or 2 ta ghor shamne agabe tahole hobe ki ager faka jaigai 2 ta 0 boshe jabe and tokhon number ta hobe 10100 jar decimal number = 10



// right shift 
// ekhane left shift er ulta hoi bit gulo right e chole jai ange ager khali ghor gulo 0 dara replace hoi jai ete kore number tar actually (2^n) dhara vag hoi 

const rightShift = (n1, n2) => n1 >> n2
console.log("right shift:", rightShift(128, 5))
console.log("right shift:", rightShift(80, 2))

/// 128 / 2^5 = 128/32 = 4
/// 80 / 2^2 = 80/2 = 20