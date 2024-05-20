const extractNumbers = (str)=>{
    return str.match(/\d+/g);
  }
  
  
  console.log(extractNumbers("abc123efg456"))
  console.log(extractNumbers(""))
  console.log(extractNumbers("abc12efg456"))
  console.log(extractNumbers("a1c2f3"))