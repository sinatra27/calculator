// Declare variables for two numbers and an operator
let num1 = 0;
let num2 = 0;
let operator;

// Select calculator buttons
const display = document.querySelector('#display');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const plusMinus = document.querySelector('#sign');
const percentage = document.querySelector('#percentage');
const decimal = document.querySelector('#decimal');
const backspace = document.querySelector('#backspace');

// Update calculator operands, operator, and the display when button click event is triggered
operands.forEach((num) => {
    num.addEventListener('click', () => {
        if (num1 === undefined || String(num1).length > 12) return;
        if (operator === undefined) {
            if (num1 == 0 && num1[1] != '.') num1 = num1.toString().slice(1);
            if (num1.length < 12) num1 += num.value;
            display.innerHTML = num1;
        } else {
            if (num2 == 0 && num2[1] != '.') num2 = num2.toString().slice(1);
            if (num2 .length < 12) num2 += num.value;
            display.innerHTML = num2;
        }
    });
});

operators.forEach((ops) => {
    ops.addEventListener('click', () => {
        if (num1 === undefined || String(num1).length > 12) return;
        if (operator != undefined) operate();
        operator = ops.value;
    });
});

equals.addEventListener('click', () => {
    if (num1 === undefined || operator === undefined) return;
    operate();
    operator = undefined;
});

clear.addEventListener('click', () => {
    num1 = num2 = 0;
    operator = undefined;
    display.innerHTML = num1;
});

plusMinus.addEventListener('click', () => {
    if (num1 === undefined || String(num1).length > 12) return;
    if (operator === undefined) {
        num1 = -num1;
        display.innerHTML = num1;
    } else {
        num2 = -num2;
        display.innerHTML = num2;
    }
});

percentage.addEventListener('click', () => {
    if (num1 === undefined || String(num1).length > 12) return;
    if (operator === undefined) {
        num1 /= 100;
        num1 = +num1.toFixed(10);
        display.innerHTML = num1;
    } else {
        num2 /= 100;
        num2 = +num2.toFixed(10);
        display.innerHTML = num2;
    }
});

decimal.addEventListener('click', () => {
    if (num1 === undefined || String(num1).length > 12) return;
    if (operator === undefined) {
        if (String(num1).includes('.')) return;
        num1 += '.';
        display.innerHTML = num1;
    } else {
        console.log(typeof(num2))
        if (String(num2).includes('.')) return;
        num2 += '.';
        display.innerHTML = num2;
    }
});

backspace.addEventListener('click', () => {
    if (num1 === undefined || String(num1).length > 12) return;
    if (operator === undefined) {
        num1 = num1.toString();
        if (num1.length > 1) num1 = num1.slice(0 , -1);
        else num1 = 0;
        display.innerHTML = num1;
    } else {
        num2 = num2.toString();
        if (num2.length > 1) num2 = num2.slice(0 , -1);
        else num2 = 0;
        display.innerHTML = num2;
    }
});

// Perform calculations by calling math functions
function operate() {
    num1 = +num1;
    num2 = +num2;
    // Conditionals when no operator selected and when dividing by zero
    if (operator === undefined) return;
    if (num2 == 0 && operator == '/') num1 = undefined;
    else if (operator == '+') num1 = +add(num1, num2);
    else if (operator == '-') num1 = +subtract(num1, num2);
    else if (operator == '*') num1 = +multiply(num1, num2);
    else num1 = +divide(num1, num2);
    if (String(num1).includes('.')) {
        for (i = 10; String(num1).length > 12; i--) {
            if (i < 0) return;
            num1 = +num1.toFixed(i);
            console.log(num1, String(num1).length)
        }
    } else if (String(num1).length > 12) {
        console.log(String(num1).length)
        if (String(num1).length > 21) return;
        num1 = num1.toExponential(5);
    }
    display.innerHTML = num1;
    num2 = 0;
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
