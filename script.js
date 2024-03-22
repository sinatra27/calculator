// Declare variables for two numbers, an operator, and the result
let num1 = 0;
let num2 = 0;
let operator;
let calculated = false;

// Select calculator display, operands, and operator
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const plusMinus = document.querySelector('#sign');
const percentage = document.querySelector('#percentage');
const decimal = document.querySelector('#decimal');
// const backspace = document.querySelector('#backspace');

// Update calculator operands, operator, and display when button click event is triggered
operands.forEach((num) => {
    num.addEventListener('click', () => {
        // event.stopPropagation();
        if (num1 === undefined) return;
        if (calculated === true) {
            num1 = 0;
            calculated = false;
        };
        if (operator === undefined) {
            num1 += num.value;
            num1 = Number(num1);
            display.innerHTML = num1;
        } else {
            num2 += num.value;
            num2 = Number(num2);
            display.innerHTML = num2;
        }
    });
});

operators.forEach((ops) => {
    ops.addEventListener('click', () => {
        // event.stopPropagation();
        // event.target.classList.toggle('selected');          // need to remove once calculated or cleared
        if (num1 === undefined) return;
        operator = ops.value;
        calculated = false;
    });
});

equals.addEventListener('click', operate);

clear.addEventListener('click', () => {
    num1 = num2 = 0;
    operator = undefined;
    calculated = false;
    display.innerHTML = num1;
});

plusMinus.addEventListener('click', () => {
    if (num1 === undefined) return;
    if (operator === undefined) {
        num1 = -num1;
        display.innerHTML = num1;
    } else {
        num2 = -num2;
        display.innerHTML = num2;
    }
});

percentage.addEventListener('click', () => {
    if (num1 === undefined) return;
    if (operator === undefined) {
        num1 /= 100;
        display.innerHTML = num1;
    } else {
        num2 /= 100;
        display.innerHTML = num2;
    }
});

// Perform calculations by calling math functions
function operate() {
    // Conditionals when no operator selected and when dividing by zero
    if (operator === undefined) return;
    if (num2 == 0 && operator == '/') num1 = undefined;
    else if (operator == '+') num1 = add(num1, num2);
    else if (operator == '-') num1 = subtract(num1, num2);
    else if (operator == '*') num1 = multiply(num1, num2);
    else num1 = divide(num1, num2);
    display.innerHTML = num1;
    calculated = true;
    // Reset values
    num2 = 0;
    operator = undefined;
}

// Addition function that accepts two numbers and returns the result
function add(n1, n2) {
    return n1 + n2;
}

// Subtraction function that accepts two numbers and returns the result
function subtract(n1, n2) {
    return n1 - n2;
}

// Multiplication function that accepts two numbers and returns the result
function multiply(n1, n2) {
    return n1 * n2;
}

// Division function that accepts two numbers and returns the result
function divide(n1, n2) {
    return n1 / n2;
}

// console.log(operate(num1, num2, operator));
