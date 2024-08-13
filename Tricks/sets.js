// set hocche muloto ekta object jeta hashmap use kore unique value k ekta object akare retrun kore 
// etar kono index number but eta ekta array like object tai array er shob method e er moddhe kaj kora jabe 
// set k amra array te convert koreo index niye kaj korte pari 

let data = [1, 2, 3, 4]
let setPractice1 = new Set(data)

// methods :

setPractice1.add(6)
setPractice1.add("hello")
setPractice1.has(1)// boolean value return korbe // false
//console.log(setPractice1,setPractice1.has(1))


//problem : 1 unique number converting an array 

function checkDuplicate(arr) {
    return ([...new Set(arr)]) // ekhane set object tak array te convert kore felsi ekhon chaile index niye kaj korte parbo 
}
checkDuplicate([1, 1, 1, 1, 3, 4, 5])

// problem : 2 if the array contains one element more then 2 times return true false

function isMoreThenTwo(nums) {
    const set = new Set()
    for (let item of nums) {
        if (set.has(item)) return true
        set.add(item)
    }
    return false
}
//console.log(isMoreThenTwo([1, 1, 3, 3, 4, 5, 2, 1]))


// easy way 

let isMoreThenTwo2 = (num) => {
    let set = new Set(num)
    return set.length !== num.length
}
//console.log(isMoreThenTwo2([1, 1, 3, 3, 4, 5, 2, 1])) 

// real life e amra kono unique data niye kaj korle amra set use korte pari and array er shob method use korte pari

