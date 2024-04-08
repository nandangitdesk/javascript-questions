const countChar = (word,char)=>{
    word = word.toLowerCase()
    char = char.toLowerCase()

    totalCount =  word.split("").reduce((accum,currChar)=>{
        if (currChar === char) {
           accum++
        }
        return accum
    },0)
    console.log(totalCount)
}





console.log(countChar("MissiSiiPI","I"))