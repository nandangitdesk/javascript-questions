const generateChartBar = (arr) => {
    return arr
      .map((currval, index) => {
        return `${index + 1} : ${"*".repeat(currval)}`;
      })
      .join("\n");
  };
  
  console.log(generateChartBar([5, 6, 3, 2]));
  