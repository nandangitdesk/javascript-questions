const toUpperCase = (char) => {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      return true;
    }
    return false;
  };
  
  const toLowerCase = (char) => {
    // if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    //   return true;
    // }
    // return false;
  
   return (char===char.toLowerCase())
    
  };
  
  console.log(toUpperCase("P"));
  console.log(toLowerCase("p"));
  console.log(toUpperCase("n"));
  console.log(toLowerCase("N"));
  