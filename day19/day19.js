const startsWith = (str, subStr) => {
    return str.toLowerCase().startsWith(subStr.toLowerCase())
    
    // return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
  };
  
  console.log(startsWith("Hello World", "hello"));
  console.log(startsWith("Hello World", "world"));
  