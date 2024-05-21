const validateHexColorCode = (hexCode) => {
    return /^#([A-fa-f\d]{3}|[A-fa-f\d]{6})$/.test(hexCode);
  };
  
  console.log(validateHexColorCode("#7f7f7f"));
  console.log(validateHexColorCode("#1234567"));
  console.log(validateHexColorCode("abc123"));
  console.log(validateHexColorCode("#gfc123"));
  