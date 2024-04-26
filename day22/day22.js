const findMedian = (arr) => {
    arr.sort((a, b) => a - b);
    let length = arr.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  };
  
  console.log(findMedian([4, 6, 8, 9, 1]));
  console.log(findMedian([4, 6, 8, 9]));
  console.log(findMedian([4, 6, 8, 9, 1, 3]));