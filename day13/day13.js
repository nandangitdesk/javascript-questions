const countVowels = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let arr = str.split("");
  
    console.log(arr);
  
    let count = 0;
    for (let char of arr) {
      if (vowels.includes(char.toLowerCase())) {
        count++;
      }
    }
      return count;
  };
  
  console.log(countVowels("Heloo World"));
  console.log(countVowels("Alementrics"));
  console.log(countVowels("Brpppppp"));
  console.log(countVowels(""));
  