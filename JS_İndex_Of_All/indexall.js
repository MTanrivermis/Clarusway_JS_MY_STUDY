const indexOfAll = () => {
  let word = prompt("Please enter your centense");
  let letter = prompt("Which letter do you want to search");
  let indexAll = new Array();
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      indexAll.push(i);
      count++;
    }
  }
  if (count > 0) {
    console.log(indexAll);
  } else {
    console.log(-1);
  }
};
indexOfAll();
