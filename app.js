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
function calculateSum(number) {
    const numberString = number.toString().split('e')[0];
    const integerString = parseInt(number).toString();
    let sum = 0;
    if (mode === 'sumOfDigits') {
        for (let i = 0; i < numberString.length; i++) {
            const digit = parseInt(numberString[i], 10);
            sum += digit;
        }
    } else if (mode === 'sumOfIntegerDigits') {
        for (let i = 0; i < integerString.length; i++) {
            const digit = parseInt(integerString[i], 10);
            sum += digit;
        }
    }
    return sum;
}