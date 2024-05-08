const removeDuplicate =(arr)=>{
    return [...new Set(arr)]
  }
  
  console.log(removeDuplicate([2,3,4,3,2,3,5,6]))
  console.log(removeDuplicate([1,2,2,3,4,5]))