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

console.log(majorityElement([3, 1, 3]))