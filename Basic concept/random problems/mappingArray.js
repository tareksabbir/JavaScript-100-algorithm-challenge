let mappingArray = (arr) => {
    let map = new Map()
    arr.forEach(e => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1)
        }
    });
    console.log(map)
}
mappingArray([1, 2, 3, 1, 4, 3, 5, 6, 5, 4, 3])


// way 2 

let mappingArray2 = (arr) => {
    let map = new Map()
    for (let e of arr) {
        map.set(e, (map.get(e) || 0) + 1)
    }
    return map
}
console.log(mappingArray2([1, 2, 3, 1, 4, 3, 5, 6, 5, 4, 3]))