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

function operate (a, b, op) {
    flag = true;
    let result;
    b = parseFloat(displayInput.textContent);  //Updates secondNumber
    // displayLog.textContent= displayLog.textContent.concat(displayInput.textContent) + "=";
    switch(op){
        case "+":
            result = Math.round((add(a, b) * 100) * (1 + Number.EPSILON)) / 100;
            if(result>=100000000||result<=-100000000){
                return displayInput.textContent = result.toExponential(4);
            }else{
                return displayInput.textContent = result;
            }
        case "-":
            result = Math.round((subtract(a, b) * 100) * (1 + Number.EPSILON)) / 100;
            if(result>=100000000||result<=-100000000){
                return displayInput.textContent = result.toExponential(4);
            }else{
                return displayInput.textContent = result;
            }
        case "X":
            result = Math.round((multiply(a, b) * 100) * (1 + Number.EPSILON)) / 100;
            if(result>=100000000||result<=-100000000){
                return displayInput.textContent = result.toExponential(4);
            }else{
                return displayInput.textContent = result;
            }
        case "/":
            result = Math.round((divide(a, b) * 100) * (1 + Number.EPSILON)) / 100;
            if(result>=100000000||result<=-100000000){
                return displayInput.textContent = result.toExponential(4);
            }else{
                return displayInput.textContent = result;
            }
    }
};

function populate(str) {
    if(flag==false){
        if(displayInput.textContent.length<8){
            displayInput.textContent = displayInput.textContent.concat(str);
        }
    }else {
        displayLog.textContent = displayInput.textContent; // + ";"
        displayInput.textContent=str;
        flag=false;
    }
};

function beginOperation(str){
    operator = str;
    flag = false;
    firstNumber = parseFloat(displayInput.textContent);
    // displayLog.textContent = displayLog.textContent + displayInput.textContent.concat(str);
    displayInput.textContent="";
};

function clear() {
    displayLog.textContent="";
    displayInput.textContent="";
    operator="";
    firstNumber=0;
    secondNumber=0;
    flag=false;
};

let firstNumber;
let secondNumber;
let operator;     // Should accept +, -, *, /
let flag = false;

let displayInput = document.querySelector(".displayInput");
let displayLog = document.querySelector(".displayLog");

const digits = document.querySelectorAll(".digit");  //Selects all digits in div.digits and "."
digits.forEach((digit) => {digit.addEventListener("click", () => populate(digit.textContent))})

const operators = document.querySelectorAll(".operator");  //Selects all operators
operators.forEach((symbol) => {symbol.addEventListener("click", () => beginOperation(symbol.textContent))});

const result = document.querySelector(".result");  //Selects the "=" button
result.addEventListener("click", () => operate(firstNumber, secondNumber, operator));

const AC = document.querySelector(".ac");       //Selects the "AC" button
AC.addEventListener("click", () => clear());