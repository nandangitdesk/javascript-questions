const calculateAverage = (arr)=>{
  
  const total = arr.reduce((accum,currVal)=>accum + currVal ,0)
  return total / arr.length

}

console.log(calculateAverage([2,4,6,8,10]));