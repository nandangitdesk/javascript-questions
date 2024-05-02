const numberRange = (start, end)=>{
    let arr = [];
    while(start <= end){
      arr.push(start);
      start++;
    }
    return arr;
  }
  
  
  console.log(numberRange(0,5))
  console.log(numberRange(3,8))
  console.log(numberRange(-2,3))