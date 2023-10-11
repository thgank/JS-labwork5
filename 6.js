const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(inputString) {
  const capitalizedString = capitalizeFirstLetter(inputString);
  console.log("Capitalized string:", capitalizedString);
  rl.close();
});

function capitalizeFirstLetter(inputString) {
  if (inputString.length > 0) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  } else {
    return inputString;
  }
}
