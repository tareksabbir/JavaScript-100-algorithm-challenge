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
console.log(intersection([4,9,5],[9,4,9,8,4]))



