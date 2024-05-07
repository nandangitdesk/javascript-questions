const randomHexColor = ()=>{
    return`#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
  }
  
  console.log(randomHexColor())
  
  //padEnd() is a string instance method that pads the current string with a given string (repeated, if needed) so that the resulting