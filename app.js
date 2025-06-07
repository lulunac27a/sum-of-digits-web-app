const numberInput = document.getElementById('numberInput');
const result = document.getElementById('result');
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
    const numberString = number.toString();
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]);
        sum += digit;
    }
    return sum;
}