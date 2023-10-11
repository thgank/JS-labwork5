const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(input) {
  const inputNumber = parseFloat(input);

  if (!isNaN(inputNumber)) {
    const factorial = getFactorial(inputNumber);
    console.log(`Factorial of ${inputNumber} is ${factorial}`);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  rl.close();
});

function getFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}
