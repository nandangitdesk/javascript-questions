const findMean = (arr) => {
    if (arr.length === 0) {
      return 0;
    }
    let mean = arr.sort((a, b) => a - b);
    return mean.reduce((acc, curval) => acc + curval, 0) / arr.length;
  };
  
  console.log(findMean([4, 6, 8, 9, 1]));
  console.log(findMean([]));
  