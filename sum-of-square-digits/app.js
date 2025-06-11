const numberInput = document.getElementById("numberInput"); //number input
const result = document.getElementById("result"); //result display
const option = document.getElementById("option"); //option selection
let mode = option.value;
function calculateSumOfDigits() {
  //calculate sum of digits
  const number = parseFloat(numberInput.value); //get number value from input
  if (isNaN(number)) {
    //if entered number is not a number
    result.textContent = "Please enter a valid number.";
  }
  const sum = calculateSum(number); //calculate sum of entered number
  result.textContent = sum; //display result
}
function calculateSumOfAllDigits(number) {
  //calculate sum of all digits
  const numberString = number
    .toString()
    .split("e")[0]
    .replaceAll(".", "")
    .replaceAll("-", ""); //remove non digit characters to avoid errors
  let sum = 0; //initialize sum
  for (let i = 0; i < numberString.length; i++) {
    //repeat for each digit
    const digit = parseInt(numberString[i], 10); //convert string to integer
    sum += digit * digit; //square each digit then add digit to sum
  }
  return sum; //return sum of all digits
}

function calculateSumOfIntegerDigits(number) {
  //calculate sum of integer digits
  const integerString = parseInt(number, 10)
    .toString()
    .replaceAll(".", "")
    .replaceAll("-", ""); //remove non digit characters to avoid errors
  let sum = 0; //initialize sum
  for (let i = 0; i < integerString.length; i++) {
    //repeat for each digit
    const digit = parseInt(integerString[i], 10); //convert string to integer
    sum += digit * digit; //square each digit then add digit to sum
  }
  return sum; //return sum of integer digits
}

function calculateSum(number) {
  //calculate sum function
  if (mode === "sumOfDigits") {
    //if mode is sum of digits
    return calculateSumOfAllDigits(number); //return sum of all digits
  } else if (mode === "sumOfIntegerDigits") {
    //else if mode is sum of integer digits
    return calculateSumOfIntegerDigits(number); //return sum of integer digits
  }
}
