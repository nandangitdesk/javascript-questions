const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((val, index) => {
      return val === arr2[index]; // Added return statement here
    });
  };
  
  console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // false
  console.log(arraysAreEqual([], [])); // true
  