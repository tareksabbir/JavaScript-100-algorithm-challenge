let mappingArray =(arr)=>{
    let map = new Map()
    arr.forEach(e => {
        if(map.has(e)){
            map.set(e,map.get(e)+1)
        } else{
            map.set(e,1)
        }
    });
    console.log(map)
}
mappingArray([1,2,3,1,4,3,5,6,5,4,3])