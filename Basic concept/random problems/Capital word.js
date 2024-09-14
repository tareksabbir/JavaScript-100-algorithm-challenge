const capitalWord =(str)=>{
    const text = str.split(" ")
   const capital = text.map((word)=>{
        const wordArray =  (word.split(""))[0].toUpperCase()
        const restWord = word.slice(1)
        return wordArray + restWord

    })
    console.log(capital.join(" "))
   
}
capitalWord("hello world")