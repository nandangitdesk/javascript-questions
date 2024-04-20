const findMin = (arr) => {
    // Method 1
  
    // arr = arr.sort((a,b)=>a-b);
    // return arr[0];
  
    // Method 2
  
    // arr =arr.sort((a,b)=>{
    //   if(b>a) return -1
    // });
    // return arr[0];
  
    // Method 3
    if (arr.length === 0) {
      return "array is empty";
    }
  
    let min = Math.min(...arr);
    return min;
  };
  
  console.log(findMin([6, 10, 3, 1, 5, 7]));
  console.log(findMin([3, 3, 5, 6, 7, 2]));
  console.log(findMin([]));
  