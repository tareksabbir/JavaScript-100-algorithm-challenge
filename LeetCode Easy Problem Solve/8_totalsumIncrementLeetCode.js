let sumIncrement =(props)=>{
    let sum = props.toString().split(",").join("")
    let result = Number(sum)+1
    console.log(result)
}

sumIncrement([1,2,3,4,5,6])