'use strict';

let value1 = 0;
let value2 = 0;
let solution = '';

const screen = document.querySelector('#screen');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operator');

const handleOperators = function (event) {
    const val = event.target.textContent;
    if (screen.values = '' && val === '-/+') {
        screen.values = val;
    } else if (val === '-/+') {
        screen.value = parseFloat(screen.value) * -1;
    } else if (val === '⌫'){
        screen.value = screen.value.slice(0, -1);
    }
};
operators.forEach(operator => {
    operator.addEventListener('click', handleOperators);
});
const handleButtonClick = function (event) {
    let val = event.target.textContent;
    if ( val === '.') {
        if (!screen.value.includes('.') ) {
            screen.value += val;
        } 
    } else {
        screen.value += val;
    }
    console.log(event.target.textContent);
};

digits.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

const operations = document.querySelectorAll('.operation');

const handleOperation = function (event) {
    value1 = screen.value;
    solution = event.target.innerText;
    console.log(solution, value1);
    screen.value = '';
};
operations.forEach(operation => {
    operation.addEventListener('click', handleOperation);
});

const handleSolution = function () {
    switch (solution) {
        case '+':
            value2 = screen.value;
            screen.value = parseFloat(value1) + parseFloat(value2);
            break;
        case '-':
            value2 = screen.value;
            screen.value = parseFloat(value1) - parseFloat(value2);
            break;
        case '*':
            value2 = screen.value;
            screen.value = parseFloat(value1) * parseFloat(value2);
            break;
        case '/':
            value2 = screen.value;
            screen.value = parseFloat(value1) / parseFloat(value2);
            break;
        default:
            break;
    }
};

const calculator = document.querySelector('form');
calculator.addEventListener('submit', e => {

    e.preventDefault();
    handleSolution();
});
