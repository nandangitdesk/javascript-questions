//programing question : longest word in string

//Q. write a func find longest word in string

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let word = str.split(' ');
  // // word.sort((a, b) => a.length - b.length);
  // word.sort((a, b) => b.length - a.length);
  // console.log(word);
  // // return word[word.length - 1];
  // return word[0];

  return word.reduce(
    (accumator, currval) =>
      currval.length > accumator.length ? currval : accumator,
    ''
  );
};

console.log(
  findLongestWord(
    'Hello my name is Nandan Patil i am from manoramanagar Thane West'
  )
);
