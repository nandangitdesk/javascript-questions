const repeatString =(str, num)=>{
    //recursive method
    // return num > 0 ? str + repeatString(str, num - 1) : str;
  
   //repeat(); method
    return num > 0 ? str.repeat(num) : str;
  }
  
  console.log(repeatString("hello",3))
  console.log(repeatString("hello",0))