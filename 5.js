const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the value of 'a': ", function(inputA) {
  let a = parseFloat(inputA);

  rl.question("Enter the value of 'b': ", function(inputB) {
    let b = parseFloat(inputB);

    console.log("Before swapping:");
    console.log("a =", a);
    console.log("b =", b);

    // Swap the values using a temporary variable
    let temp = a;
    a = b;
    b = temp;

    console.log("After swapping:");
    console.log("a =", a);
    console.log("b =", b);

    rl.close();
  });
});
