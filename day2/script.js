
const generateHash = (str)=>{
     
    if (str.length > 280 || str.length === 0) {
        return false
    }

    str=str.split(" ")
    // str=str.map((currval)=>currval.replace(currval[0],currval[0].toUpperCase()));
    str = str.map((currval)=>currval.charAt(0).toUpperCase() + currval.slice(1))
    console.log(str)
    str=`#${str.join("")}`
    console.log(str)
}





console.log(generateHash("my name is nandan patil"))