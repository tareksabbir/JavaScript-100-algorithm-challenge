let data = [3, 2, 2, 3]


function removingElement(nums, val) {
    let j = 0
    for (let n of nums) {
        if (n !== val) {
            nums[++j] = n
        }
    }
    return j

}

console.log(removingElement(data, 3))


//way 2


var removeElement2 = function (nums, val) {
    var a = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            a.push(nums[i])
        }
    }
    for (var i = 0; i < a.length; i++) {
        nums[i] = a[i]
    }
    return a.length
};


removeElement2([2, 3, 3, 3, 4, 5], 3)