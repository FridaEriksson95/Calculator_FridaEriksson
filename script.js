const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

const digits = document.querySelectorAll('.digit');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const minus = document.getElementById('minus');
const multi = document.getElementById('multi');
const div = document.getElementById('div');
const x2 = document.getElementById('x2');

digits.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText.trim();
        display.value = currentInput;
    });
});

plus.addEventListener('click', () => {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = '+';
        display.value = operator;
    }
});

minus.addEventListener('click', () => {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = '-';
        display.value = operator;
    }
});
multi.addEventListener('click', () => {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = '*';
        display.value = operator;
    }
});

div.addEventListener('click', () => {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = '/';
        display.value = operator;
    }
});
xy.addEventListener('click', () => {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = 'xy';
        display.value = operator;
    }
});

equal.addEventListener('click', () => {
    if (currentInput !== '' && previousInput !== '') {
        calculate();
        display.value = previousInput;
        currentInput = '';
        operator = '';
    }
});

clear.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
});

function calculate() {
    if (operator === '+') {
        previousInput = (parseInt(previousInput) + parseInt(currentInput)).toString();
    } else if (operator === '-') {
        previousInput = (parseInt(previousInput) - parseInt(currentInput)).toString();
    } else if (operator === '*') {
        previousInput = (parseInt(previousInput) * parseInt(currentInput)).toString();
    } else if (operator === '/') {
        previousInput = (parseInt(previousInput) / parseInt(currentInput)).toString();
    } else if (operator === 'xy') {
        const exponent = parseInt(currentInput);
        previousInput = (parseInt(previousInput) ** exponent).toString();
}
}