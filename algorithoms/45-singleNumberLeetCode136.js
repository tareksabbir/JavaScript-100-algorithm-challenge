function singleNumber(nums) {
    let map = {};
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1
    }
    console.log(map)
    for (let key in map) {
        if (map[key] === 1) {
          return Number(key)
        }
    }
     
}

singleNumber([4, 1, 2, 1, 2])