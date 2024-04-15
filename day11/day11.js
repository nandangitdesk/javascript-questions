const sumOfDigits = (num) => {
    let arr = Array.from(String(num),Number)
    return arr.reduce((acc,curr)=>acc = acc+curr,0)
  }
  
  console.log(sumOfDigits(1234))
  console.log(sumOfDigits(3456))
  console.log(sumOfDigits(456789))