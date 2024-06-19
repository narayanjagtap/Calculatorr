const display = document.getElementById('display');
let displayValue = ' ';

function updateDisplay() {
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number.toString();
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace(/%/g, '/100')).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}
