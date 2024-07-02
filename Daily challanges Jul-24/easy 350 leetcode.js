const intersection=(nums1,nums2)=>{
    let frequency = new Map()
    nums1.forEach((num) => {
        frequency.set(num, (frequency.get(num) || 0) + 1)
    })
    let result = []
    nums2.forEach((num)=>{
        if(frequency.get(num)>0){
            result.push(num)
            frequency.set(num,frequency.get(num)-1)

        }

    })
   return result

}
//console.log(intersection([4,9,5],[9,4,9,8,4]))



// way 2 

var intersect2 = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=>a-b);
    nums2 = nums2.sort((a,b)=>a-b);
    
    let i = 0 
    let j = 0
    let returnArray = [];
    
    while(j < nums2.length && i < nums1.length){
        if(nums1[i] === nums2[j]){
            returnArray.push(nums1[i]);
            i++;
            j++;
        }
        else if(nums1[i] > nums2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    
    return returnArray;
};

console.log(intersect2([4,9,5],[9,4,9,8,4]))