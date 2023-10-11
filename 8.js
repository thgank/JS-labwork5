const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(inputString) {
  rl.question("Enter a letter to count: ", function(letterToCount) {
    const count = letterCount(inputString, letterToCount);
    console.log(`Count of letter "${letterToCount}" in "${inputString}" is: ${count}`);
    rl.close();
  });
});

function letterCount(inputString, letterToCount) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === letterToCount) {
      count++;
    }
  }
  return count;
}
