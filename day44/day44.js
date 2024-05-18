const validatePassword = (password) => {
    const regexs = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    return regexs.test(password);
  };
  
  console.log(validatePassword("password"));
  console.log(validatePassword("password123"));
  console.log(validatePassword("pass123@_Secret"));
  console.log(validatePassword("Password123!"));
  