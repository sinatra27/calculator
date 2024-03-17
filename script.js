// Declare variables for two numbers and an operator
let num1, num2, operator, result;

num1 = 5;
num2 = 0;
operator = 'subtract';

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

// Operate function that accepts two numbers and an operator then calls a math function
function operate(n1, n2, op) {
    // Conditionals when the second number is zero and the operator
    if (num2 == 0 && op == 'divide') result = undefined;
    else if (op == 'add') result = add(n1, n2);
    else if (op == 'subtract') result = subtract(n1, n2);
    else if (op == 'multiply') result = multiply(n1, n2);
    else result = divide(n1, n2);
    return result;
}

console.log(operate(num1, num2, operator));