function Demo(text){
    this.country = text
    return {edu:"bsc"}
}
const result = new Demo("Bangladesh")
console.log(result.country)

//qs: what will be the output in this code and why this object wil not be return
//ans: that function will return undefined 