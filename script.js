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
    isResultDisplayed = true;
    isOperationInProgress = false;
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
        case "x":
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
    firstNumber=0;
    secondNumber=0;
};

function populate(str) {

    if(isResultDisplayed==false){
        if(isOperationInProgress==false){
            if(displayInput.textContent.length<8){displayInput.textContent = displayInput.textContent.concat(str)};            
        }else {
            displayInput.textContent=str;
            isOperationInProgress=false;
        };
    }else {
            displayLog.textContent = displayInput.textContent; // + ";"
            displayInput.textContent=str;
            isResultDisplayed=false;
        }

    };

function beginOperation(str){

    if(firstNumber!==0){
        secondNumber = parseFloat(displayInput.textContent);
        operate(firstNumber, secondNumber, operator);
    }

    operator = str;
    firstNumber = parseFloat(displayInput.textContent);
    isResultDisplayed = false;
    // displayLog.textContent = displayLog.textContent + displayInput.textContent.concat(str);
    // displayInput.textContent="";
    displayInput.textContent += ` ${str}`;
    isOperationInProgress=true;
};

function clear() {
    displayLog.textContent="";
    displayInput.textContent="";
    operator="";
    firstNumber=0;
    secondNumber=0;
    isResultDisplayed=false;
    isOperationInProgress=false;
};

let firstNumber=0;
let secondNumber=0;
let operator="";     // Should accept +, -, *, /
let isResultDisplayed = false;
let isOperationInProgress = false;
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