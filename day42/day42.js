const validateCreditCard = (cardNumber) => {
    cardNumber = cardNumber.replace(/\s+/g, "");
    let revNum = "";
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      revNum = revNum + cardNumber[i];
    }
  
    let doubleNum = revNum
      .split("")
      .map((currval, index) => {
        if (index % 2 !== 0) {
          currval = currval * 2;
  
          if (currval > 9) {
            currval = currval - 9;
          } else {
            currval = currval;
          }
        }
        return currval;
      })
      .reduce((accum, currval) => {
        return accum + Number(currval);
      }, 0);
  
    console.log(doubleNum);
    return doubleNum % 10 === 0;
  };
  
  console.log(validateCreditCard("4567 3473 1234 9857"));
  console.log(validateCreditCard("4468 3673 1134 9157"));
  