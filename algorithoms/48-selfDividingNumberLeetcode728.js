// self dividing Number

// self divided number holo nijer number gulo diye njk vag korle vag shes 0 hoite hobe but kono motoy number ta 0 hoite parbe nah 

const self_d = (left, right) => {
    let result = []
    for (let i = left; i <= right; i++) {
        let self = true
        for (let n of i.toString().split("")) {
            if (i % parseInt(n) !== 0) {
                self = false
            }
        }
        if (self) {
            result.push(i)
        }
    }
    return result
}
self_d(1, 22)






//way 2


var selfDividingNumbers = function(left, right) {
    let result = [];
    for (var i=left; i<=right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
};

function isSelfDividing(num) {
    let str = num.toString();
    let digit;
    for (var i=0; i<str.length; i++) {
        digit = Number(str[i]);
        if (digit == 0) {
            return false;
        }
        if (num%digit != 0) {
            return false;
        }
    }
    return true;
}




selfDividingNumbers(1,22)



