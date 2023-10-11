function reverseNumber(x) {
    // convert the number to a string
    const numStr = x.toString();
  
    // reverse the string
    const reversedStr = numStr.split('').reverse().join('');
  
    // convert the reversed string back to a number
    const reversedNum = parseInt(reversedStr, 10);
  
    return reversedNum;
  }
  // test
  const x = 32243;
  const reversed = reverseNumber(x);
  console.log(reversed);
  