const numberInput = document.getElementById('numberInput');
const result = document.getElementById('result');
const option = document.getElementById('option');
let mode = option.value;
function calculateSumOfDigits() {
    const number = parseFloat(numberInput.value);
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }
    const sum = calculateSum(number);
    result.textContent = `Sum of digits: ${sum}`;
}
function calculateSumOfAllDigits(number) {
    const numberString = number.toString().split('e')[0];
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i], 10);
        sum += digit;
    }
    return sum;
}

function calculateSumOfIntegerDigits(number) {
    const integerString = parseInt(number, 10).toString();
    let sum = 0;
    for (let i = 0; i < integerString.length; i++) {
        const digit = parseInt(integerString[i], 10);
        sum += digit;
    }
    return sum;
}

function calculateSum(number) {
    if (mode === 'sumOfDigits') {
        return calculateSumOfAllDigits(number);
    } else if (mode === 'sumOfIntegerDigits') {
        return calculateSumOfIntegerDigits(number);
    }
}