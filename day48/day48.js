const isValidDate = (dateFormat)=>{
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20))[0-9]{2}$/.test(dateFormat)
  }
  
  
  console.log(isValidDate("12/23/2020"))
  console.log(isValidDate("13/2/1700"))
  console.log(isValidDate("15/50/2020"))
  console.log(isValidDate("01/01/2000"))