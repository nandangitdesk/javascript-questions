const removeDuplicates = (arr) =>{
    let newArr = [...new Set(arr)];
    
    return newArr;
  }
  console.log(removeDuplicates([1,2,3,4]))
  console.log(removeDuplicates([1,2,3,3,4,2,5,6,2,4,7]))
  console.log(removeDuplicates([10,11,12,10,13,14,15,12,16]))
