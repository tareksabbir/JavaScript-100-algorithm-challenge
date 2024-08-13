// hashMap
// counting number how many times a number or char is exist in the array 
const majorityElement = (nums) => {
    let map = {}
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1
    }
    console.log(map)


}
majorityElement([3, 1, 3])