let data = [3, 2, 2, 3]


function removingElement(nums, val) {
    let j =0
    for(let n of nums){
        if(n!==val){
            nums[++j]=n
        }
    }
    return j 
    
}

console.log(removingElement(data, 3))