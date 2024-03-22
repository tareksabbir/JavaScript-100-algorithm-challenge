// given a rectangular matrix of characters add border of asterisks(*) to it 
// a non empty array of non empty equal-length string 
// hint concat(),unshift(),push()
// input = ["abc","bad"]
// output = ["*****","*abc*","*bad*","*****"]

function borderAddInTheArray(pictures) {
    let border = '*'.repeat(5)
    pictures.unshift(border)
    pictures.push(border)
    let lengthOfArray = pictures.length - 1
    for (let i = 1; i < lengthOfArray; i++) {
        pictures[i] = '*'.concat(pictures[i], '*')
    }
    console.log(pictures)

}

borderAddInTheArray(["new", "view"])

//practice again 

function addBorder(pictures) {
    let wall = '*'.repeat(pictures[0].length + 2)
    pictures.unshift(wall)
    pictures.push(wall)
    let lengthOfArray = pictures.length - 1
    for (let i = 1; i < lengthOfArray; i++) {
        pictures[i] = '*'.concat(pictures[i], '*')

    }
    console.log(pictures)
}



//addBorder(["abc", "dad"])

