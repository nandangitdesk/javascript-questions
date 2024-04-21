const toCamelCase = (str)=>{
    return str.trim().split(" ").map((word,index)=>{
      if(index===0){
        return word.toLowerCase();
      }else{
       return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      
    }).join("")
  }
  
  const toSnakeCase =(str)=>{
    return str.trim().split(" ").join("_").toLowerCase();
  }
  
  
  console.log(toCamelCase("hello world nandan"))
  console.log(toSnakeCase("hello world nandan"))