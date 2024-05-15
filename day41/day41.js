let rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 80,
  };
  
  let convertCurrency = (amount, from, to) => {
    let amountInUSD = 0;
    if (from !== "USD") {
      amountInUSD = amount / rates[from];
    } else {
      amountInUSD = amount;
    }
  
    let convertAmount = 0;
    if (to !== "USD") {
      convertAmount = amountInUSD * rates[to];
    } else {
      convertAmount = amountInUSD;
    }
  
    return convertAmount;
  };
  
  console.log(convertCurrency(1, "GBP", "INR"));
  