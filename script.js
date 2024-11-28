function add (a, b) {
    return a+b;
};

function subtract (a, b) {
    return a-b;
};

function multiply (a, b) {
    return a*b;
};

function divide (a, b) {
    return a/b;
};

let firstNumber;
let secondNumber;
let operator;     // Should accept +, -, *, /

function operate (a, b, symbol) {
    let result;
    switch(symbol){
        case "+":
            return result = add(a, b);
        case "-":
            return result = subtract(a, b);
        case "*":
            return result = multiply(a, b);
        case "/":
            return result = divide(a, b);
    }
};

