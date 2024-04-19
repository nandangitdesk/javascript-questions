const sumOfSquare = (arr) => {
    //Method 1
    return arr.reduce((acc, curval) => (acc = acc + curval * curval), 0);
  
    //Method 2
    // let sum = 0;
    // for (let elem of arr) {
    //   sum += elem * elem;
    // }
    // return sum;
  };
  
  console.log(sumOfSquare([1, 2, 3, 4, 5]));
  