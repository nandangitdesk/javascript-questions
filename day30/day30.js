const numberRangeRecursive = (start, end,arr=[])=>{
  
    if(start <= end){
      arr.push(start);
      return numberRangeRecursive(start+1, end,arr)
    }
    return arr;
  }
  
  
  console.log(numberRangeRecursive(0,5))
  console.log(numberRangeRecursive(-2,3))