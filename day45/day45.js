const validateIndianMobileno = (number)=>{
    return /^[6-9]\d{9}$/.test(number);
  }
  
  console.log(validateIndianMobileno("986001234567"))
  console.log(validateIndianMobileno("7687654321"))
  console.log(validateIndianMobileno("5687654321"))
  console.log(validateIndianMobileno("9687654321"))