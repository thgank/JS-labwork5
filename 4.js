function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      // Calculate and display the multiplication
      const multiplication = num1 * num2;
      document.getElementById('multiplicationResult').textContent = `Multiplication: ${num1} * ${num2} = ${multiplication}`;
      document.getElementById('divisionResult').textContent = '';
    } else {
      document.getElementById('multiplicationResult').textContent = '';
      document.getElementById('divisionResult').textContent = 'Invalid input. Please enter valid numbers.';
    }
  }
  
  function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      // Check if the second number is not zero to avoid division by zero
      if (num2 !== 0) {
        // Calculate and display the division
        const division = num1 / num2;
        document.getElementById('divisionResult').textContent = `Division: ${num1} / ${num2} = ${division}`;
        document.getElementById('multiplicationResult').textContent = '';
      } else {
        document.getElementById('divisionResult').textContent = "Division by zero is not allowed.";
        document.getElementById('multiplicationResult').textContent = '';
      }
    } else {
      document.getElementById('multiplicationResult').textContent = '';
      document.getElementById('divisionResult').textContent = 'Invalid input. Please enter valid numbers.';
    }
  }
  