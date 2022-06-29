function capitalize(string) {
  return string.toUpperCase().charAt(0) + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function calculator(firstOperand, secondOperand, operation) {
  switch (operation) {
    case "+":
      return firstOperand + secondOperand;
      break;
    case "-":
      return firstOperand - secondOperand;
      break;
    case "*":
      return firstOperand * secondOperand;
      break;
    case "/":
      return Math.round((firstOperand / secondOperand) * 100) / 100;
      break;
    default:
      break;
  }
}

function analyzeArray(array) {
  let average = array.reduce((accumulator, num) => accumulator + num);
  average /= array.length;
  let sorted = array.sort((a, b) => a - b);
    
  return {
    average: Math.round(average),
    min: sorted[0],
    max: sorted[sorted.length - 1],
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, analyzeArray };
