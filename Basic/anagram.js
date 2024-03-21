function countChar(str) {
    let map = new Map()
    for (let n of str) {
        if (!map.has(n)) {
            map.set(n, 1)
        } else {
            map.set(n, map.get(n) + 1)
        }
    }
    return map
}

function anagram(str1, str2) {
    if (str1.length !== str2.length) return false
    let s1 = countChar(str1)
    let s2 = countChar(str2)
    for (let n of s1) {
        if (s1[n] !== s2[n]) return false
    }
    return true
}


//console.log(anagram("carrace", "racecar"))


function anagram2(str1, str2) {
    if (str1.length !== str2.length) return false
    return str1.split("").sort().join("") == str2.split("").sort().join("")
}

console.log(anagram2('care', 'race'))