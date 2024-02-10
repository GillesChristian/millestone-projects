'use strict';

let value1 = 0;
let value2 = 0;
let solution = '';

const screen = document.querySelector('#screen');
const digits = document.querySelectorAll('.digits');

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
