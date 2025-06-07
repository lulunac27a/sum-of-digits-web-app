const numberInput = document.getElementById('numberInput');
const result = document.getElementById('result');
function calculateSumOfDigits() {
    const number = parseInt(numberInput.value, 10);
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }
    const sum = calculateSum(number);
    result.textContent = `Sum of digits: ${sum}`;
}
function calculateSum(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}