'use strict';

// Variables to store calculator values
let firstValue = 0;
let secondValue = 0;
let currentOperation = '';

// Screen element
const screen = document.querySelector('#screen');

// Digit buttons
const digits = document.querySelectorAll('.digits');

// Operator buttons
const operators = document.querySelectorAll('.operator');

// Function to handle operator buttons
const handleOperators = function(event) {
    const value = event.target.textContent;
    if (screen.value === '' && value === '-/+' && !screen.value.includes('-')) {
        screen.value = '-';
    } else if (value === '-/+' && screen.value !== '-') {
        screen.value = parseFloat(screen.value) * -1;
    } else if (value === '⌫') {
        screen.value = screen.value.slice(0, -1);
    }
};

// Add event listener for operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', handleOperators);
});

// Function to handle digit buttons
const handleButtonClick = function(event) {
    const value = event.target.textContent;
    if (value === '.') {
        if (!screen.value.includes('.')) {
            screen.value += value;
        }
    } else {
        screen.value += value;
    }
};

// Add event listener for digit buttons
digits.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Operation buttons
const operations = document.querySelectorAll('.operation');

// Function to handle operation buttons
const handleOperation = function(event) {
    firstValue = screen.value;
    currentOperation = event.target.innerText;
    screen.value = '';
};

// Add event listener for operation buttons
operations.forEach(operation => {
    operation.addEventListener('click', handleOperation);
});

// Function to perform arithmetic operations
const handleSolution = function() {
    secondValue = screen.value;
    switch (currentOperation) {
        case '+':
            screen.value = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            screen.value = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            screen.value = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            screen.value = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        default:
            break;
    }
};

// Calculator form
const calculatorForm = document.querySelector('form');

// Add event listener for calculator form submission
calculatorForm.addEventListener('submit', e => {
    e.preventDefault();
    handleSolution();
});
