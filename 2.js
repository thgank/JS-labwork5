function sortStringAlphabetically(inputString) {
    // convert the string to an array of characters, sort them, and join them back into a string
    const sortedString = inputString.split('').sort().join('');
  
    return sortedString;
  }
  
  const inputString = 'webmaster';
  const sorted = sortStringAlphabetically(inputString);
  console.log(sorted);
  