// majority element 

const majorityElement = (nums) => {
    let map = {}
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1
    }
    let len = nums.length
    for (let key in map) {
        if (map[key] > len / 2) {
            return key
        }
    }
}

//console.log(majorityElement([3, 1, 3]))


///way 2

var majorityElement2 = function (nums) {
    let count = 0, leader;
    for (let i of nums) {
        if (count < 1) leader = i;
        else if (i == leader) count++
        else count --
    }
    return leader
};

console.log(majorityElement2([3, 1, 3]))